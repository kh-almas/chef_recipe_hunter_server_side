const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

const cors = require('cors');

app.use(cors())



const chef = require('./data/chef.json');
const items = require('./data/recipes.json');
const blog = require('./data/blog.json');



app.get('/', (request, response) => {
    response.send('the_plate_escape is on the way');
});

app.get('/artical', (request, response) => {
    response.send(blog);
});
app.get('/chef', (request, response) => {
    response.send(chef);
});
app.get('/recipes', (request, response) => {
    response.send(items);
});
app.get('/chef/item/:id', (request, response) => {
    const id = request.params.id;
    const finalData = items.all_recipes.filter(n => id === n.chef_id);
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