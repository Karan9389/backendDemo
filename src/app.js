import express from "express"
import cors from "cors"
import CookieParser from "cookieparser";

const app = express();

//app.use (used for middle_wares and congigurations)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true  
}))

//hear we configure the middleware to set the limit of json file come from source(site)
app.use(express.json({limit: "16kb"}));
// hear we configure the middleware for the data come from url but (as it come may differ for different site so we use encoded)
app.use(express.urlencoded({extended : true, limit : "16kb"}))  // mostly configuration like app.use(express.urlencoded()),  is enough but we can use extend to take object of object

//hear we configure the static public file that can be access by anyone as public assets,
app.use(express.static())

//we use cookieParser to read, set and alter the cookies on client broweser 
app.use(CookieParser())




// app.listen(process.env.PORT, ()=>{
//     console.log('')
// })
export {app}