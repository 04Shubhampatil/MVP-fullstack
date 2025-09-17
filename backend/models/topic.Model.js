import mongoose,{Schema} from "mongoose";

const topicSchema = new Schema({
    topicName: {
        type: String,
        required: true
    },
    topicDescription: {
        type: String,
        required: true
    },
})