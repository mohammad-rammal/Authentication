import express from 'express';
import {connectDB} from './db/connectDB.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json()); // allows to parse incoming data from req.body
app.use(cookieParser()); // allows to parse incoming cookies
app.use(cors()); // allows cross-origin requests (you might need this depending on setup)

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Use your API routes
app.use('/api/auth', authRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    try {
        connectDB();
        console.log(`Server is running on port ${PORT}... ➡️`);
    } catch (error) {
        console.log('Error connection to MongoDB: ', error.message);
    }
});
