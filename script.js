const container = document.querySelector("#container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(rowNum) {
  for (let r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeColumns(cellNum) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    }
  }
}

function createGrid(num = 2) {
  makeRows(num);
  makeColumns(num);
}

createGrid();

const newCells = Array.from(cells);
newCells.forEach((cell) => {
  cell.addEventListener("mouseover", () =>
    cell.setAttribute("style", "background-color: #457b9d")
  );
});

function getUserInput() {
  let num;

  do {
    num = prompt("Please enter the size of the grid (max of 100!)", "32");
  } while (num > 100 || num < 2);

  createGrid(num);
}

let button = document.querySelector("#input");
button.addEventListener("click", getUserInput);
