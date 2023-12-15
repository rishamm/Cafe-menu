import express from "express";

const router = express.Router();
import { createMenu, getAllMenus, getMenuById, updateMenu, deleteMenu } from '../controllers/menus';



router.post('/createNew', createMenu);
router.post('/update', updateMenu);
router.post('/delete/:id', deleteMenu);
router.get('/getAllMenus', getAllMenus);
router.get('/getMenuById/:id', getMenuById);



module.exports = router;