const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("hello we got your request(from response)");
//     // res.send({ color: 'red' });
//     res.send('<h1> this is my webpage!</h1>');
// })

//get requests
app.get('/', (req, res) => {
    res.send('on home page');
})


app.get('/cats', (req, res) => {
    res.send('meowwwwwww!!');
})


app.get('/dogs', (req, res) => {
    res.send('Bowww!!');
})


//post requests
app.post('/', (req, res) => {
    res.send('on home page');
})


app.post('/cats', (req, res) => {
    res.send('meoww!!');
})


app.post('/dogs', (req, res) => {
    res.send('Bowww!!');
})

app.get('/r/:something', (req, res) => {

    const { something } = req.params;    // points to :something
    const { q } = req.query; //?something
    res.send(`You are now on the ${something} page with prams ${q}...`);
})

// for everything other...comes at last like a else block
app.get('*', (req, res) => {
    res.send('I dont Know that route or path');
})

app.listen(8080, () => {
    console.log("Listening on port:8080")
})