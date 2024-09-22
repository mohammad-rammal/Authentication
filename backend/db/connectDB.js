import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB.👍");
        
    } catch (error) {
        console.log('Error connection to MongoDB: ', error.message);
        process.exit(1); // 0 success , 1 is failed
    }
};
