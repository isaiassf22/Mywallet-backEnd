import { usersCollection,sessionsCollection } from "../app.js"
import { userSchema } from "../joiValidation/joi.js"
import bcrypt from "bcrypt" 


export function userSchemaValidation(req,res,next){

    const user= req.body
    const {error, value}= userSchema.validate(user, {abortEarly: false})

    if (error){
        const boxErros= error.details.map((d)=>d.message)
        res.status(400).send(boxErros)
    }

    res.locals.user=user

    next()

}

export async function siginInValidation(req,res,next){
    const {email, password}= req.body

    try{
        const user = await usersCollection.findOne({email})
        if(!user){
            res.sendStatus(401)
        }
        const decryptPsswrd=bcrypt.compareSync(password,user.password)
        if(!decryptPsswrd){
            res.sendStatus(401)
        }
        res.locals.user = user
    }catch(err){
        console.log(err)
        res.sendStatus(500)

    }

    next()
}

export async function tokenRouteValidation(req,res,next){
    const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection?.findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }
    const user = await usersCollection.findOne({ _id: session?.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

