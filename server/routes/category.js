import express from "express";

const router = express.Router();
import { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory } from '../controllers/category';



router.post('/createNewCategory', createCategory);
router.post('/updateCategory', updateCategory);
router.post('/deleteCategory/:id', deleteCategory);
router.get('/getAllCategory', getAllCategory);
router.get('/getCategoryById/:id', getCategoryById);



module.exports = router;