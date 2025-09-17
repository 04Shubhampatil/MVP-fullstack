import Router from 'express'
import {  createTopics, getTopics,getbyIDTopics,deleteTopics} from "../controllers/topic.controller.js"

const router = Router();


router.post("/add",createTopics)
router.get("/get",getTopics)
router.get("/:id",getbyIDTopics)
router.delete("/:id",deleteTopics)


export default router