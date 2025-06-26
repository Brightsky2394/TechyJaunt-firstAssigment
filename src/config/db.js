const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database successfully connected');
    } catch (err) {
        console.error("Unable to connect to Database\n", err.message)
    }
}

module.exports = dbConnect;