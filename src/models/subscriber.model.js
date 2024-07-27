import mongoose, { Schema } from "mongoose";

const subscriberSchema = mongoose.Schema({
subscriber:{
    type:Schema.Types.ObjectId,
    ref: "User"
},
channel:{
    type:Schema.Types.ObjectId,
    ref: "User"
}
},{timestamps: true})

const Subscriber = mongoose.model("Subscriber",subscriberSchema)