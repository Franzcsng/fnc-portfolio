import express from 'express';
import { Resend } from 'resend';

const router = express.Router();

router.post('/', async (req, res) => {
    const {
        sender,
        emailAddress,
        message
    } = req.body;

    try {

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'franzcsng23@gmail.com',
            subject: `Portfolio Message from ${sender}`,
            html: `
                <p><strong>Name:</strong> ${sender}</p>
                <p><strong>Email:</strong> ${emailAddress}</p>
                <p>${message}</p>
            `
        });

        return res.json({
            success: true,
            message: 'Email sent'
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Failed to send email'
        });
    }
});

export default router;