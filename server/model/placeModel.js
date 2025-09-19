import mongoose from "mongoose"
const placeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    },
    filename:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    District:{
        type: String,
        required: true
    },
    maplink:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }

})
export default mongoose.model("Place",placeSchema) 