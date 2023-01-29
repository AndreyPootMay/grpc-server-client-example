const express = require('express');
const router = express.Router();

const client = require('../grpc_client');

router.post('/addCase', function (req, res) {
    const payload = {
        full_name: req.body.full_name,
        location: req.body.location,
        age: req.body.age,
        infected_type: req.body.infected_type,
        state: req.body.state
    }

    client.addCase(payload, function (err, response) {
        res.status(200).json({ mensaje: response.message })
    });
});

router.get('/listCases', function (req, res) {
    const rows = [];

    const call = client.listCases();

    call.on('data', function (data) {
        rows.push(data);
    });

    call.on('end', function () {
        console.log('Success list');
        res.status(200).json({ data: rows });
    });

    call.on('error', function (e) {
        console.log('Error: ', e);
    });
});

module.exports = router;
