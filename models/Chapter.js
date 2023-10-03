import { Schema, model, Types } from "mongoose";

let collection = 'chapters'
let schema = new Schema({
    manga_id:{
        type: Types.ObjectId,
        required: true
    },
    title: { type:String, required:true },
    cover_photo: { type:String, required:true },
    pages: [{ type:String, required:true }],
    order: { type:Number, required:true }
},{
    timestamps: true
})
const Chapter = model(collection, schema)
export default Chapter