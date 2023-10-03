import { Schema, model, Types } from "mongoose";

let collection = 'comments'
let schema = new Schema({
    chapter_id:{
        type: Types.ObjectId,
        required: true
    },
    user_id:{
        type: Types.ObjectId,
        required: true, 
        ref:'users'
    },
    text:{type:String,required: true},
}, {
    timestamps:true
})

let Comments = model(collection, schema)

export default Comments