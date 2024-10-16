const mongoose = require('mongoose');

const db = "mongodb+srv://arman:namra@cluster0-mern2.trvmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-mern2";

async function connectTodb() {
    await mongoose.connect(db);
    console.log("connected to mongoose atlas db successfully");
}

module.exports = connectTodb;