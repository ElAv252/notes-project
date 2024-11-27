import mongoose, { Schema } from "mongoose";

const User = new Schema({
    name: String,
    password: String,
    age: Number,
    Email: String
});

export const MyUser = mongoose.model('User', User);
