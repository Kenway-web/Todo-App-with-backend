/*
    Todo:{
    title:String,
    description:String,
    completed:boolean
    }
*/
const mongoose = require("mongoose");

//.env
mongoose.connect(
    "mongodb+srv://Venom_34:OFKjccZ2Vp6J2kfm@cluster0.81beeeg.mongodb.net/todos",
  );

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});


const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}