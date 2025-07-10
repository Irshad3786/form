import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    address:String,
    pincode:Number,
    gender:String,
    prefercontact:String

},{timestamps:true})

const formSchemaModel = mongoose.model("FormData",formSchema)
export default formSchemaModel