import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{type : String, require:true},
    name: {type: String, required: true},
    email: {type: String, required: ture, unique:true},
    imageUrl:  {type: String, required: true},
    cartItems: {type:Object,default: {}}}, {minimize:false})


const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User;

