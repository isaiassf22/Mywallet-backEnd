import { transactionsCollection } from "../app.js"

export async function addTransaction(req,res){

    const transaction= res.locals.transaction

    try {
        await transactionsCollection.insertOne(transaction)
    } catch (error) {
        console.log(error)
        res.status(500)
    }

}




export async function  boxTransactions (req,res){

    const user = res.locals.user;

    try {
      const transactions = await transactionsCollection.find({ user: user._id }).toArray();
  
      delete user.password;
      res.send({ transactions, user });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }

}