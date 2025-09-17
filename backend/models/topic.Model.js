import mongoose,{Schema} from "mongoose";

const topicSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:"https://imgs.search.brave.com/umhrXmVeV7A7PrZJtTQ8x9fCh74awO01bsxwbYoWJZQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzQzLzAzLzQx/LzM2MF9GXzE1NDMw/MzQxMjhfZ0paZkVD/QXFtSUViMEpXZ0VN/NXhzQmgxbngyN01C/RXEuanBn"
       
    },
   questionID:{
    type:Schema.Types.ObjectId,
    ref:"Question",
    required:true

   }


}, {timestamps: true})

export default mongoose.model("Topic", topicSchema)
