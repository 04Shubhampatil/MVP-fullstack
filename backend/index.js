import express from "express"
import connectDB from "./database/db.js"
import 'dotenv/config'
import bodyParser from "body-parser"
import corse from "cors"



const app = express()
app.use(corse())
const PORT = process.env.PORT || 5500
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.json({ "message": "Api is staritng" })
})


app.listen(PORT, () => {
    connectDB().then(() => {
        console.log("database connected successfully");
    })
    console.log("server connected successfully");

})