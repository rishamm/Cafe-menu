import express from "express";
import { readdirSync } from 'fs'
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 7000;
const DB_LINK = process.env.MONGO_URL;

const app = express();

app.use(cors());

//routes
readdirSync("./routes").map((route) => app.use("/", require("./routes/" + route)));

// Port is connected to 7000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

//database
mongoose
    .connect(DB_LINK)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error connecting to mongodb", err));