const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("DB is connected" + config);
    } catch (error) {
        console.error("ERROR: " + error.message);
        process.exit(1); 
    }
}

module.exports = connectDB;