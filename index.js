const express = require("express"); // Required download Express
const app = express();
const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://chinhht09:Chinh2013@react-blog.b2feq.mongodb.net/<dbname>?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB connected"))
    .catch((err) => console.error(err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000);
