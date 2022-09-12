const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index', {
        name: 'Bob',
        age: '16'
    });
});

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Started server on port 3000')
    }
});