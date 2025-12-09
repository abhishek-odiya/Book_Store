import express from "express";
import { handleBookStoreController, handleBookListController, handleBookDeleteController, handleBookUpdateController } from "../controller/book.controller.js"

const router = express.Router();

// http://localhost:8000/book/addbook
router.post("/addbook", handleBookStoreController);
router.get("/booklists", handleBookListController);
router.post("/deletebook", handleBookDeleteController);
router.put("/updatebook", handleBookUpdateController);



export default router;