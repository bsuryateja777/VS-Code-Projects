//.then .catch instead of if true one function else another function



const fakeReqPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout!!!');
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        },delay)
    })
}



fakeReqPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT worked!!!!  (Page 1)");
        return fakeReqPromise('yelp.com/api/coffee/page2');
    })
    .then(() => {
        console.log("IT worked!!!!  (Page 2)");
        return fakeReqPromise('yelp.com/api/coffee/page3');
    })
    .then(() => {
        console.log("IT worked!!!!  (Page 3)");
        return fakeReqPromise('yelp.com/api/coffee/page4');
    })
    .catch(() => {
        console.log("error Occured!!!");
    })



const fakeRequest = (url) => {

    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YAYYY!!! resolved')
            }
            reject('OOPPSSSS! rejected')
        }, 1000)
    })

}

fakeRequest('book.com/page1')
    .then((data) => {
        console.log('Done with your "THEN" request!!');
    })
    .catch((err) => {
        console.log('ERROR occured in "catch" block');
})