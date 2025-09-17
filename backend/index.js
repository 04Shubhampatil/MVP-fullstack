import express from "express"
import connectDB from "./database/db.js"
import 'dotenv/config'
import bodyParser from "body-parser"
import corse from "cors"
import questionRouter from './Routes/questionsRouter.js'
import topicRouter from './Routes/topicsRoute.js'

const app = express()
app.use(corse())
const PORT = process.env.PORT || 5500
app.use(bodyParser.json())


//routes
app.use("/api/topics",topicRouter)
app.use("/api/questions",questionRouter)


app.get("/", (req, res) => {
    res.json({ "message": "Api is staritng" })
})


app.listen(PORT, () => {
    connectDB().then(() => {
        console.log("database connected successfully");
    })
    console.log("server connected successfully");

})