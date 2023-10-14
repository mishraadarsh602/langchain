import express from "express";
const app = express();

import dotenv from "dotenv";
// import AppRouter from "./routes/AppRouter/AppRouter";
import router from "./routes/routes.js"; // Make sure to provide the correct relative path

dotenv.config();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/", router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`app is runnig on ${PORT}`);
})
