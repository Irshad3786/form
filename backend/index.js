import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import formRoute from "./Routes/formRoute.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("mongoDB Connected");
})
.catch((error)=>{
    console.log(error);
})

app.use("/formData",formRoute)

app.listen(process.env.PORT || 3030 ,()=>{
    console.log(`server Running on port ${process.env.PORT}`);
    
})