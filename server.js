const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

const loginRouter = require("./routes/logins");
app.use(express.json());
app.use("/logins", loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});
