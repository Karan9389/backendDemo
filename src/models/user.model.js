import mongoose from "mongoose";

//Bcrypt library to help you hash passwords. insalled using (npm i bcrypt)
import bcrypt from "bcrypt";

// another main package jwt(json web token ) is used to send payload in encrypted form.
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userName:{  // all these filed of user model is pre- created in model diagram 
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true,    // if you want to make it easy to search make index true.
    },
    fullName:{   
        type: String,
        required: true,
        trim: true,  
        index: true, 
    },
    email:{   
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,   
    },
    email:{   
        type: String,
        required: true,
        trim: true,  
        index: true, 
    },
    avatar: {  // avatar saved on another database we fetch it's url form cloudnary service.
        type: String,
        required:true,

    },
    coverImage: {  //  saved on another database we fetch it's url form cloudnary service.
        type: String,
    },
    watchHistory:[ // how to save watch History :- we save by saving the array of object id of video.
        //id of user and video is manage by the maongodb itself.
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Pawword is required']
    },
    refreshTokens: {
        type: String,
    },
},{timestamps: true})

//to encrypt the password just befor save using hash function we use (pre hook middle-ware in mongoose liberary)
//as hashing take some time so we use aynce function in pre hook middleware
userSchema.pre("save", async function (next){ 
    //if modification of password happen then hasing function will execute otherwise it return (next) to middleware
    if(!this.isModified(this.password)) return next();
    this.password = bcrypt.hash(this.password, 10) // bcrypt liberay use.
    next();
})

//when user enter the password to check and validate it we use custom method to check it.
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password); //password-(type by you) and this.password-(hashed saved password) it will return true or false.
}

//methods create in userSchema using jasonwebtoken to genrate tokens.
userSchema.methods.generateAccessToken = function (){
   return jwt.sign(
        {
        _id : this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
    }
)
}
userSchema.methods.generateRefreshToken = function (){
       return jwt.sign(
        {
        _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
    }
)
}

export const User = mongoose.model("User",userSchema);  // in mongoDB thismodel will store as (user) in lowercasae.