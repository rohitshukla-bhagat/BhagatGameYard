// Variable declaration
const cards = document.querySelector(".cards");
const cardsChild = cards.children;
// Event if the user click on the any cards
cards.addEventListener("click", (elem) => {
  let elemTarget = elem.target; // extract the clicked element
  // If the clicked element textis Rules then check the game name and navigate to that rules html file
  if (elemTarget.innerText == "Rules") {
    let headTest = elemTarget.parentNode.parentNode.firstElementChild;
    if (headTest.innerText == "B Chit Kingdom") {
      location.href = "chitKingdomRule.html";
    } else if (headTest.innerText == "B Jumble Words") {
      location.href = "jumblewordsRule.html";
    } else if (headTest.innerText == "B Simon Game") {
      location.href = "simonGameRule.html";
    }
  } 
  // If the clicked element textis Play then check the game name and navigate to that game directory 
  else if (elemTarget.innerText == "Play") {
    let headTest = elemTarget.parentNode.parentNode.firstElementChild;
    if (headTest.innerText == "B Chit Kingdom") {
      location.href = "ChitKingdom/index.html";
    } else if (headTest.innerText == "B Jumble Words") {
      location.href = "JumbleWords/index.html";
    } else if (headTest.innerText == "B Simon Game") {
      location.href = "SimonGame/index.html";
    }
  }
});
