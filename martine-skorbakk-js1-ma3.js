// question 1
(a, b) => a - b;

// question 2
fetch("https://api.rawg.io/api/games?genres=sports")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    gameLoop(json);
  })
  .catch(function (error) {
    document.location.href = "error.html";
  });

function gameLoop(json) {
  console.dir(json);
  const games = json.results;
  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

// question 3
const newText = "These cats are outrageous.";
const replaceText = newText.replace(" cats", " giraffes");
newText.innerText = replaceText;

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const idUrl = "https://my.site.com?userId=7";

fetch(idUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    getId(json);
  })
  .catch(function (error) {
    console.dir(error);
  });

function getId() {
  if (params.has("id")) {
    id = params.get("id");
  } else if (params === 0) {
    document.location.href = "third.html";
  } else if (params < 10) {
    document.location.href = "first.html";
  } else if (params > 10) {
    document.location.href = "second.html";
  }
}

// question 5
const container = document.querySelector(".container");
const buttonRemove = document.querySelector("button");
container.removeChild(buttonRemove);

// question 6
const cowsByClass = document.querySelector(".cows");

let parrotElement = document.createElement("li");
parrotElement.className = "parrots";
parrotElement.innerHTML = "Parrots";

cowsByClass.after(parrotElement);

// question 7
const ratingUrl = "https://api.rawg.io/api/games/3801";

async function getRating() {
  const divRating = document.querySelector(".rating");
  try {
    const response = await fetch(ratingUrl);
    const result = await response.json();

    divRating.innerHTML = result.rating;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getRating();
