const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        mongoose.connect( process.env.DB_CONNECTION, {
            autoIndex: true
        })
        console.log("MongoDB is Online.")
    } catch ( error ) {
        console.log(error)
        throw new Error("MongoDB is Crashed.")
    }
}
module.exports = {dbConnection}