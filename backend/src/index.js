import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});


connectDb()
    .then(()=>{
    app.on("error",(error)=>{
        console.error("Error in express app",error)
    })
    
    app.listen(process.env.PORT || 6000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO DB connection failed !!!",error)
})