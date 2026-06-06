import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import contactRoute from './routes/contact.js';

const app = express();

app.use(cors({
     origin: [
        'http://localhost:3000',
        'https://fnc-portfolio.vercel.app',
        'https://fnc-portfolio.vercel.app/contact'
    ]
}));

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server running');
});

app.use('/api/contact', contactRoute);


const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

