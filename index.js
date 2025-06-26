const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./src/config/db');
const router = require('./src/routes/student.route');
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(router);

const port = 8090;

app.listen(port, () => {
    dbConnect();
    console.log(`Server is running on http://localhost:${port}`)
})