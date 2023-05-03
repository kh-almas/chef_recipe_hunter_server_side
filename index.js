const express = require('express');
const app = express();
const port = 5000;



app.get('/', (request, response) => {
    response.send('news is on the way');
});

app.listen(port, () => {
    console.log(`the_plate_escape app listening on port ${port}`)
});