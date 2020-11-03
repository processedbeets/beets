const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 5000;

let records = [
    {
        id: 1
    },
    {
        id: 2
    }
];

app.get('/api/records', (req, res) => {
    res.send(records);
})

app.listen(port, () => console.log(`Server listening on port ${port}`));