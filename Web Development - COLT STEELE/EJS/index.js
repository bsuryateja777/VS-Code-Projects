const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/home', (req, res) => {

    res.render('home');

})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand : randNum });
})


app.listen(3000, () => {

    console.log('LISTENING ON PORT 3000');

})
