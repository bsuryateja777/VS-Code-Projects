const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username.value;
    const usertweetInput = tweetForm.elements.tweet.value;


    const user = usernameInput;
    const tweet = usertweetInput;

    const allTweets = document.querySelector('#allTweets');

    const sUTweet = document.createElement('li');

    const uname = document.createElement('h4');
    uname.innerText = user;

    const uTweet = document.createElement('p');
    uTweet.innerText = tweet;
    sUTweet.appendChild(uname);
    sUTweet.appendChild(uTweet);

    allTweets.appendChild(sUTweet);

    usernameInput = "";
    usertweetInput = "";
});
