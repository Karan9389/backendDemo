// require ('dotenv').config({path : './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
// const app = express();
dotenv.config({
    path : './env'
})
connectDB()
    .then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
    })
    .catch((err)=>{
        console.log("Data base connection Failed",err);
    })




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