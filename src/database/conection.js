const mongoose = require('mongoose');
require('dotenv').config();

const conection = async () => {
    try {
        const username = process.env.VITE_USERNAME_DB;
        const password = process.env.VITE_PASSWORD_DB;
        const dbUrl = `mongodb+srv://${username}:${password}@blog.05ec6jh.mongodb.net/?retryWrites=true&w=majority&appName=Blog`;

        await mongoose.connect(dbUrl)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Error connecting to MongoDB');
    }
};

module.exports = conection;
