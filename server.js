// Using .env variables
require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const cors = require('cors');
const { PORT: port } = process.env;

app.use(express.static('public'));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using routes
//app.use(require('./routes'));

// Server running
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});