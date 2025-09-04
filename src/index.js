// require ('dotenv').config({path : './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
// const app = express();
dotenv.config({
    path : './env'
})
connectDB();




/*
(async()=>{
    try {
        await mongoose.connrect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error in connecting to MongoDB");
            throw error;
        })
        app.listening(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);   
        })
        
    } catch (error) {
        console.log(error);
        throw error;
    }
})();
*/