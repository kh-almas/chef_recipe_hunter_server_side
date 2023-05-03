const express = require('express');
const app = express();
// const port = process.ENV.PORT || 5000;
const port = 5000;

const cors = require('cors');



const chef = require('./data/chef.json');

app.use(cors())

app.get('/', (request, response) => {
    response.send('news is on the way');
});
app.get('/chef', (request, response) => {
    response.send(chef);
});

app.listen(port, () => {
    console.log(`dragonNews app listening on port ${port}`)
});