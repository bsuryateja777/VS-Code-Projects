const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/r/:subreddit', (req, res) => {

    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
})

app.listen('2020', (req, res) => {
    console.log("Listening");
})