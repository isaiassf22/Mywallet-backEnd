import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import joi from "joi"
import router from "./routes/authRoutes.js"
import routesTransaction from "./routes/transactionRoutes.js"
dotenv.config()


const app=express()
app.use(cors())
app.use(express.json())
const mongoClient= new MongoClient(process.env.DATABASE_URI)

try{
    await mongoClient.connect();
    console.log("mongoDB connected!!")
}catch(err){
    console.log(err)
}

const db= mongoClient.db("MyWallet")
export const usersCollection =db.collection("users")
export const sessionsCollection = db.collection("sessions")
export const transactionsCollection = db.collection("transactions")


app.use(router)
app.use(routesTransaction)


app.listen(5000,()=> console.log("app rodando"))
