import { Router } from "express";
import { addTransaction, boxTransactions } from "../controllers/transac.control.js";
import { transactionValidation } from "../middlewares/transactionValidate.js";
import { tokenRouteValidation } from "../middlewares/validationAuth.js";
const router = Router()

router.post("/transactions",tokenRouteValidation,transactionValidation, addTransaction)
router.get("/transactions",tokenRouteValidation, boxTransactions)

export default router