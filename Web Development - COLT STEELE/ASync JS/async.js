//async functions return a promise which is resolved by default
// if we include throw then the promise is rejected
const hello = async function() {
    return "hello";
}
hello().then((data) => {
    console.log(`${data} surya`)
})



const login = async (username, password) => {
    if (!username || !password) throw 'missing Credentials';
    if (password === 'surya') return 'welcome';
    throw 'invalid password';
}


login('surya', 'surya')
    .then((data) => {
    console.log(data)
    })
    .catch((err) => {
    console.log(err)
})