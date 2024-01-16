import mongoose from "mongoose";


const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected Sucessfully");
    } catch (error) {
        console.error("Connection Unsucessfull" + error.message)
    }

}
export default connectDB;


