import express from "express";

const router = express.Router();
import { placeOrder, completeOrder, getTableDataByUserId } from '../controllers/orders'



router.post('/placeOrder', placeOrder)
router.post('/completeOrder', completeOrder)
router.get('/getTableDataByuser/:userId', getTableDataByUserId)


module.exports = router;