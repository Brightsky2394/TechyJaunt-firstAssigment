const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./src/config/db');
const router = require('./src/routes/student.route');
const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

const port = process.env.PORT || 'your-port-number';

app.listen(port, () => {
    dbConnect();
    console.log(`Server is running on http://localhost:${port}`)
})