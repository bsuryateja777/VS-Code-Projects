const figlet = require("figlet");
const colors = require("colors");

figlet('hello world!', function (err, data) {
    if (err) {
        console.log("something went wrong!");
        console.dir(err);
        return;
    }
    console.log(data.green);
    console.log(colors.rainbow(data));
})