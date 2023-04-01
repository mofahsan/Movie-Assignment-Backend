const express = require ("express")
require("dotenv").config()
require("./config/dbConnector")
const cors = require("cors")
const app = express()
const moviesRoute = require("./routes/moviesRoute")

app.use(express.static("./uploads"))
app.use(cors())
app.use(express.json())
app.use("/",moviesRoute)

const PORT = process.env.PORT
app.listen((PORT),()=>{
    console.log(`Server is listening on ${PORT}`)
})

