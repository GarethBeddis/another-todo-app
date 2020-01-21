const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080

app.use(bodyParser.json());

app.use(express.static('dist'));

app.use('/api/todos', require('./routes/api/todos'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

connectDB();
