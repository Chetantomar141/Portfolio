const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'messages.json');

// Initialize Resend client if key is provided
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
if (resend) {
    console.log('Resend email client initialized successfully!');
} else {
    console.warn('Resend API key is missing. Email notifications will be skipped.');
}

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow local development, server-to-server requests, or matching origins
        if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
            callback(null, true);
        } else {
            // Automatically allow all Vercel and Netlify subdomains
            if (origin.endsWith('.vercel.app') || origin.endsWith('.netlify.app')) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    },
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());

// Ensure data directory and file exist
async function initDatabase() {
    try {
        const dir = path.dirname(DATA_FILE);
        await fs.mkdir(dir, { recursive: true });
        try {
            await fs.access(DATA_FILE);
        } catch {
            await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
        }
    } catch (err) {
        console.error('Database initialization failed:', err);
    }
}
initDatabase();

// Routes
// 1. Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// 2. Submit Contact Form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Please fill in all required fields.' });
        }

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address.' });
        }

        // Create new message object
        const newMessage = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            name: name.trim(),
            email: email.trim(),
            phone: phone ? phone.toString().trim() : '',
            subject: subject.trim(),
            message: message.trim(),
            createdAt: new Date().toISOString(),
            status: 'unread'
        };

        // Read existing messages
        const fileContent = await fs.readFile(DATA_FILE, 'utf8');
        const messages = JSON.parse(fileContent);

        // Add new message
        messages.unshift(newMessage); // newest first

        // Write back
        await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));

        // Send email via Resend if client is configured
        if (resend) {
            try {
                const emailTo = process.env.EMAIL_TO || 'chetann.tomar@gmail.com';
                const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';

                await resend.emails.send({
                    from: emailFrom,
                    to: [emailTo],
                    subject: `Portfolio Contact: ${subject.trim()}`,
                    html: `
                        <div style="font-family: 'Poppins', sans-serif; padding: 25px; color: #333; max-width: 600px; border: 1px solid #00f0ff; border-radius: 10px; background-color: #050d18; color: #f4f6fc;">
                            <h2 style="color: #00f0ff; border-bottom: 2px solid rgba(0, 240, 255, 0.2); padding-bottom: 10px; margin-top: 0;">New Portfolio Lead</h2>
                            <p style="font-size: 16px;">You have received a new contact submission from your portfolio website.</p>
                            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; color: #f4f6fc;">
                                <tr>
                                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 120px; color: #00f0ff;">Name:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${name.trim()}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.05); color: #00f0ff;">Email:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);"><a href="mailto:${email.trim()}" style="color: #00f0ff; text-decoration: none;">${email.trim()}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.05); color: #00f0ff;">Phone:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${phone ? phone.toString().trim() : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.05); color: #00f0ff;">Subject:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${subject.trim()}</td>
                                </tr>
                            </table>
                            <div style="background: rgba(17, 34, 64, 0.4); padding: 20px; border-radius: 8px; border: 1px solid rgba(0, 240, 255, 0.1); margin-top: 20px;">
                                <h4 style="margin-top: 0; color: #00f0ff; font-size: 16px; margin-bottom: 10px;">Message:</h4>
                                <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6; font-size: 14px; color: #a8b2d1;">${message.trim()}</p>
                            </div>
                            <p style="font-size: 11px; color: #8892b0; margin-top: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 15px;">
                                Sent automatically from Chetan Tomar's MERN Portfolio Backend.
                            </p>
                        </div>
                    `
                });
                console.log('Notification email sent successfully via Resend');
            } catch (emailErr) {
                console.error('Failed to send email notification via Resend:', emailErr);
            }
        }

        res.status(201).json({
            success: true,
            message: 'Your message has been received! I will get back to you soon.',
            data: { id: newMessage.id }
        });
    } catch (err) {
        console.error('Error saving message:', err);
        res.status(500).json({ error: 'Server error. Failed to save your message.' });
    }
});

// 3. Get all messages (Protected by simple passkey)
app.get('/api/messages', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const passkey = process.env.ADMIN_PASSKEY || 'admin123';

        if (!authHeader || authHeader !== `Bearer ${passkey}`) {
            return res.status(401).json({ error: 'Unauthorized. Invalid passcode.' });
        }

        const fileContent = await fs.readFile(DATA_FILE, 'utf8');
        const messages = JSON.parse(fileContent);

        res.json({ success: true, count: messages.length, messages });
    } catch (err) {
        console.error('Error fetching messages:', err);
        res.status(500).json({ error: 'Server error. Failed to fetch messages.' });
    }
});

// 4. Mark message as read/unread
app.patch('/api/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const authHeader = req.headers.authorization;
        const passkey = process.env.ADMIN_PASSKEY || 'admin123';

        if (!authHeader || authHeader !== `Bearer ${passkey}`) {
            return res.status(401).json({ error: 'Unauthorized.' });
        }

        const fileContent = await fs.readFile(DATA_FILE, 'utf8');
        let messages = JSON.parse(fileContent);

        const index = messages.findIndex(m => m.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Message not found.' });
        }

        messages[index].status = status || 'read';
        await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));

        res.json({ success: true, message: `Message status updated to ${messages[index].status}` });
    } catch (err) {
        console.error('Error updating message status:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Portfolio Server is running on port ${PORT}`);
});
