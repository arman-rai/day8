const connectTodb = require('./db_files');
const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
connectTodb();

app.get('/', (req, res) => {
    res.status(200).render("home.ejs")
})

app.get("/about", (req, res) => {
    res.status(200).render("about.ejs")
})

// const PORT = process.env.PORT;

app.listen(3000, () => {
    console.log(`node.js listening on port 3000 successfully`);
})