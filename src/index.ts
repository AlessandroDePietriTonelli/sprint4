let reportAcudits: {
  obj: { data: Date; joke: string; score: number | undefined };
}[] = [];
let score = 0;

const joke = document.getElementById("joke");
const nextBtn = document.getElementById("nextBtn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const section = document.getElementById("section");

function getJoke() {
  fetch(" https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((datos) => {
      if (joke !== null && joke !== undefined) {
        joke.innerHTML = `<h5><strong>${datos.joke}</strong></h5>`;
        console.log(datos.joke);
        let actualJoke = datos.joke;
        pushJoke(actualJoke);
      }
    });
}

function getChuckNorris() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((datos) => {
      if (joke !== null && joke !== undefined) {
        joke.innerHTML = `<p><strong>${datos.value}</strong></p>`;
        console.log(datos.value);
        let actualJoke = datos.value;
        pushJoke(actualJoke);
      }
    });
}

function alternateJoke() {
  const random = Math.floor(Math.random() * 10) + 1;
  if (random % 2 === 0) {
    getJoke();
  } else {
    getChuckNorris();
  }
}

changeBlob();
alternateJoke();

function pushJoke(value: string) {
  let obj = {
    data: new Date(),
    joke: value,
    score: score === 0 ? undefined : score === 1 ? 1 : score === 2 ? 2 : 3,
  };
  reportAcudits.push({ obj });
}

function showMeNextJoke() {
  alternateJoke();
  changeBlob();
  console.log(reportAcudits);
}

function assignScoreOne() {
  if (reportAcudits.length >= 1) {
    let score = 1;
    let index = reportAcudits.length - 1;
    reportAcudits[index].obj.score = score;
  }

  console.log(reportAcudits);
}

function assignScoreTwo() {
  if (reportAcudits.length >= 1) {
    let score = 2;
    let index = reportAcudits.length - 1;
    reportAcudits[index].obj.score = score;
  }
  console.log(reportAcudits);
}

function assignScoreThree() {
  if (reportAcudits.length >= 1) {
    let score = 3;
    let index = reportAcudits.length - 1;
    reportAcudits[index].obj.score = score;
  }
  console.log(reportAcudits);
}

function changeBlob() {
  const blobs = ["blob1", "blob2", "blob3", "blob4"];
  const randomIndex = Math.floor(Math.random() * 4);
  if (section?.classList.contains(blobs[0])) {
    section.classList.remove(blobs[0]);
    section.classList.add(blobs[randomIndex]);
  } else if (section?.classList.contains(blobs[1])) {
    section.classList.remove(blobs[1]);
    section.classList.add(blobs[randomIndex]);
  } else if (section?.classList.contains(blobs[2])) {
    section.classList.remove(blobs[2]);
    section.classList.add(blobs[randomIndex]);
  } else if (section?.classList.contains(blobs[3])) {
    section.classList.remove(blobs[3]);
    section.classList.add(blobs[randomIndex]);
  }
}

nextBtn?.addEventListener("click", showMeNextJoke);
btn1?.addEventListener("click", assignScoreOne);
btn2?.addEventListener("click", assignScoreTwo);
btn3?.addEventListener("click", assignScoreThree);
