import { sessionsCollection, usersCollection } from "../app.js"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from 'uuid'

export async function SignUp(req,res){
 const user = res.locals.user
 const passwordHash = bcrypt.hashSync(user.password, 10)
 try{
    await usersCollection.insertOne({...user,password:passwordHash})
    res.sendStatus(201)
 }catch(err){
    console.log(err)
    res.status(500)
 }
}

export async function SignIn(req,res){
    const user = res.locals.user
    const token = uuidV4()
    try{
      await sessionsCollection.insertOne({token,userId:user._id})
      res.send({token})
    }catch(err){
      console.log(err)
    }
}