const grid = document.querySelector('.grid');
let gridHeight = grid.style.maxHeight;
gridHeight = 960;
let gridWidth = grid.style.maxWidth;
gridWidth = 960;

function createDiv(num) {
    for (let i = 1; i <= num ** 2; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.border = '1px solid black';
        squareDiv.style.margin = '0px';
        squareDiv.style.height = ((gridHeight/num) - 2) + 'px'; //subtract 2 due to border
        squareDiv.style.width = ((gridWidth/num) - 2) + 'px';

        grid.appendChild(squareDiv);
    }
}

createDiv(16);