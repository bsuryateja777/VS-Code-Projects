const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let comments = [
    {
        id: 1,
        username : "Todd",
        comment : "Lol thats so funny.."
    },
    {
        id: 2,
        username : "Skyler",
        comment : "Thats not so funny.."
    },
    {
        id: 3,
        username : "Surya",
        comment : "Please get a life, Todd"
    },
    {
        id: 4,
        username : "Nithin",
        comment : "Aur dho modi ko vote"
    }
]
let newid = 5;

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: newid++ });
    // newid++;
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('show', { comment });

})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    if (id < newid) {
        const newcomment = req.body.comment;
        const foundcomment = comments.find(c => c.id === parseInt(id));
        foundcomment.comment = newcomment;
        res.redirect('/comments');
    }
    else {
        res.send("Comment doesnt exist")
    }
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // const foundcomment = comments.find(c => c.id === parseInt(id));
    comments = comments.filter(c => c.id !== parseInt(id))
    res.redirect('/comments');
    
})

app.get('/tacos', (req, res) => {
    const { meat, qty } = req.query;
    res.send(`OK! here are your ${qty} ${meat}'s`);
})


app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK! here are your ${qty} ${meat}'s`);
})

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
})