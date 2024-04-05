const reportAcudits: { obj: { data: Date; joke: string; score: number | undefined; }; }[] = [];
let score = 0;
let actualJoke = "";

const joke = document.getElementById('joke');
const nextBtn = document.getElementById('nextBtn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

function getJoke() {
    fetch(' https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())
    .then(datos => {
        if(joke !== null && joke !== undefined){
        joke.innerHTML = `<h5><strong>${datos.joke}</strong></h5>`;
        console.log(datos.joke)
        actualJoke = datos.joke;
        }
    }) 
}

function getChuckNorris() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(datos => {
        if(joke !== null && joke !== undefined){
            joke.innerHTML = `<h5><strong>${datos.value}</strong></h5>`;
            console.log(datos.value)
            actualJoke = datos.value;
            }
    })
}

function alternateJoke() {
    const random = Math.floor(Math.random() * 10) +1;
    if (random % 2 === 0){
        getJoke()
    } else {
        getChuckNorris()
    }
} 

alternateJoke()


function showMeNextJoke() {
    let obj = {
        data: new Date(),
        joke: actualJoke,
        score: (score === 0) ? undefined : (score === 1) ? 1 : (score ===2) ? 2 : 3

    }
    reportAcudits.push({obj})
    score = 0
    console.log(reportAcudits)
    
    alternateJoke()

}

function assignScoreOne() {
    score = 1;
}

function assignScoreTwo() {
    score = 2;
}

function assignScoreThree() {
    score = 3;
}
nextBtn?.addEventListener('click', showMeNextJoke);
btn1?.addEventListener('click',assignScoreOne)
btn2?.addEventListener('click',assignScoreTwo)
btn3?.addEventListener('click',assignScoreThree)