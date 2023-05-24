const express = require("express")
const { dbConnection } = require("./database/config")
require("dotenv").config()

const app = express()
dbConnection()

app.use(express.static("public"))

app.use("/api", require("./routes/auth"))

app.listen(process.env.PUERTO, () => {
    console.log(`Servidor corriendo en ${process.env.PUERTO}`)
})