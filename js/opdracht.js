console.log("js is gelinkt cofveve!");

// SWITCHEN TUSSEN LIGHT EN DARK MODE (met in CSS als hulp var-styles)
// Geleerd van: https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/

// Var voor de button die tussen de themas switcht
var themeSwitcher = document.querySelector(".button-darkmode");

// FUNCTIE VOOR THEME SWITCH EN TEKST ALS JE OP DARKMODE TOGGLE KLIKT
themeSwitcher.addEventListener("click", function () {

    // Get the current selected theme
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch tussen `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    // Set current theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
});

// KEY EVENTS
var buttonPri = document.querySelector('.button-pri');
console.log(buttonPri);

var body = document.querySelector('body');

body.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        buttonPri.click();
    }
});

// Page: Generator

// eventlistener + functie die plaatje wisselt van de themeSwitcher
themeSwitcher.addEventListener("click", function () {
    themeSwitcher.classList.toggle("themebuttonsun");
});



// JSON DATA LADEN
var jsondata = "https://tronalddump.io/random/quote";


//JSON lader met XMLHttpRequest
var request = new XMLHttpRequest();
// request.open('get', jsondata);
// request.responseType = 'json';
// request.send();

var tweetButton = document.querySelector(".tweetbutton");
var surpriseButton = document.createElement("button");
var tweetButtonDiv = document.querySelector(".tbdiv");

// var voor tweet tekst
var p = document.querySelector("#tweettext");

// Tekst in nieuwe p inladen
request.addEventListener("load", function () {
    // console.log("jsondata is geladen");
    // console.log(request.response.value);
    // console.log(request.response.appeared_at);

    var tweet = document.querySelector('.tweet-text');

    p.textContent = request.response.value;
    tweet.appendChild(p);
});

// Button die pagina refresht zodat nieuwe tweet laadt
tweetButton.addEventListener("click", function () {
    // location.reload();
    request.open('get', jsondata);
    request.responseType = 'json';
    request.send();
});

tweetButton.addEventListener("keypress", function () {
    // location.reload();
    request.open('get', jsondata);
    request.responseType = 'json';
    request.send();
});

// LOAD INDICATOR
window.onload = function loadIndicator() {
    console.log('loading');
    p.textContent = 'One sec, before the tweet is loaded!';
};

var count = 0;

// // Functie die aantal clicks telt en de blank text weghaalt en vervangt voor de tweet
// tweetButton.onclick = function countClicks() {
//     count++;

//     if (count == 1) {
//         var tweetArticle = document.querySelector(".clicked");
//         tweetArticle.removeAttribute("class", "clicked");

//         var blankText = document.querySelector(".blank");
//         blankText.setAttribute("class", "clicked");

//         tweetButton.textContent = 'Show me another tweet';

//         surpriseButton.removeAttribute("clicked");
//     } else if (count == 3) {
//         tweetButton.textContent = 'TRUMP up the MADNESS';
//     } else if (count == 5) {
//         tweetButton.textContent = "No I'm not tired yet, show me more!";
//     } else if (count == 7) {
//         surpriseButton.setAttribute("class", "surprisebutton");
//         surpriseButton.textContent = 'Surprise!';
//         tweetButtonDiv.appendChild(surpriseButton);
//     } else if (count == 9) {
//         tweetButton.textContent = 'Come on, PLEASE just click the surprise button';
//     }
// };

// document.addEventListener("keydown", event => {
//     if (event.keyCode === 83) {
//         location.reload();
//     }
// });

