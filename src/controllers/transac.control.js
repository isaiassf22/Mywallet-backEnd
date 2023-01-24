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

}