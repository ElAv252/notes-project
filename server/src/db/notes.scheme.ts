import mongoose, { Schema } from "mongoose";

const Note = new Schema({
    title: String,
    text: String
});

export const MyNote = mongoose.model('Note', Note);
