const grid = document.querySelector(".grid");
const change = document.getElementById("change");

let gridHeight = grid.style.maxHeight;
gridHeight = 960;
let gridWidth = grid.style.maxWidth;
gridWidth = 960;

function createDiv(num) {
  for (let i = 1; i <= num ** 2; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("id", "square");
    squareDiv.style.border = "1px solid black";
    squareDiv.style.margin = "0px";
    squareDiv.style.height = gridHeight / num - 2 + "px"; //subtract 2 due to border
    squareDiv.style.width = gridWidth / num - 2 + "px";

    grid.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
      // generate a random color for each mouseover event
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      squareDiv.style.backgroundColor = "#" + randomColor;
    });
  }
}

//need this function in order to make new grids
function clearGrid() {
  grid.innerText = "";
}

change.addEventListener("click", () => {
  let num = prompt("Type in a number between 1 and 100.");
  if (isNaN(num) || num < 1 || num > 100) {
    alert("Invalid number. Please try again.");
  } else {
    clearGrid();
    createDiv(num);
  }
});
