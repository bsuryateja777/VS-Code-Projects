import axios from "axios";
// a library for making http requests
/*


// without async but promises
axios.get("https://swapi.dev/api/people/1/")
.then((res) => {
    console.log(res);
})
    .catch((e) => {
    console.lof(e);
    })


//with using async
    
const getStarWarsPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1/");
    console.log("data is", res);
}

getStarWarsPerson();

//setting headers in axios

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    try {
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res;
    } catch (error) {
        console.error("Error fetching joke:", error);
        return { data: { joke: "Oops! Something went wrong." } }; // Fallback joke
    }
}

button.addEventListener('click', async () => {
    const getJoke = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(getJoke.data.joke);
    jokes.append(newLi);
});

*/

const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');


const addNewJoke = async () => {
    const joke = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.textContent = joke;
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res);
        return res.data.joke;
    } catch (e) {
        console.error("Error fetching joke:", e);
        return `No jokes available at the moment!`;
    }
}

button.addEventListener('click', addNewJoke);




