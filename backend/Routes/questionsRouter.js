import Router from 'express'
import { createQuestions, getQuestions, getById, deleteQuestions } from "../controllers/questions.controller.js"

const router = Router();


router.post("/add", createQuestions)
router.get("/get", getQuestions)
router.get("/:id", getById)
router.delete("/:id", deleteQuestions)


export default router