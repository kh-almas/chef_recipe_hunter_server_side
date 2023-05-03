const express = require('express');
const app = express();
// const port = process.ENV.PORT || 5000;
const port = 5000;

const cors = require('cors');



const chef = require('./data/chef.json');
const items = require('./data/recipes.json');

app.use(cors())

app.get('/', (request, response) => {
    response.send('the_plate_escape is on the way');
});
app.get('/chef', (request, response) => {
    response.send(chef);
});
app.get('/chef/item/:id', (request, response) => {
    const id = request.params.id;
    const finalData = items.all_recipes.find(n => id === n.chef_id);
    response.send(finalData);
});
app.get('/chef/:id', (request, response) => {
    const id = request.params.id;
    const finalData = chef.chefs.find(n => id === n.id);
    response.send(finalData);
});

app.listen(port, () => {
    console.log(`the_plate_escape app listening on port ${port}`)
});