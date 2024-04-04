"use strict";
const joke = document.getElementById('joke');
const nextBtn = document.getElementById('nextBtn');
function getJoke() {
    fetch(' https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(datos => {
        if (joke !== null && joke !== undefined) {
            joke.innerHTML = datos.joke;
            console.log(datos.joke);
        }
    });
}
getJoke();
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', getJoke);
