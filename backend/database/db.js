import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL,)
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("connetion faild", error.message);
    }
}

export default connectDB;