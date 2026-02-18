import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
});


connectDb()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error in express app", error)
        })
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Mongodb connection failed!", error)
    })