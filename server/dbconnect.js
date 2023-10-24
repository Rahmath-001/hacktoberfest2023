import mongoose from "mongoose";

async function connectdb(){
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb+srv://rahmath:rahmath@apidata.sposgew.mongodb.net/Stationary")
        console.log("Mongo DB is CONNECTED . . .  ")
    } catch (error) {
        console.log(error);
    }
}

export default connectdb();