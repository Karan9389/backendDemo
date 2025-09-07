import mongoose, { Schema } from "mongoose"; //as we import schema from mongoose hear we no need to do (mongoose.Schema) we can directly use Schema 

//to use more mongoose complex queries we use mongoose-paginate-v2 package to manage watch History.
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,   // Fetch from cloudnary
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    discription: {
        type: String, 
        required: true,
    },
    view:{
        typer: Number,
        default: 0,
    },
    duration: {
        type: Number,
        required: true,
    },
    isPublished:{
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true,
});

//Aggregation pipeline 
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

