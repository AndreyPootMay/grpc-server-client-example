const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/case', require('./routes/cases.js'));

app.listen(port, () => {
    console.log('Server in port', port);
});
