const fakeReqCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('connection TimeOut');
        }
        else
            success(`Here is your fake data from ${url}`);
    },delay)
}

//callback Hell

fakeReqCallBack('books.com/Page1',
    function (response) {
        console.log("It worked (1st Time)!!!!");
        console.log(response);

        fakeReqCallBack(books.com / Page2,
            function (response) {
                console.log("It worked (2st Time)!!!!");
                console.log(response);
            },
            function (err) {
                console.log("Error (2st Time)!!!!");
                
            }

        )
    },
    function (err) {
        console.log("Error (1st Time)!!!!");
    }
)

fakeReqCallBack('asdfredf', success, failure);