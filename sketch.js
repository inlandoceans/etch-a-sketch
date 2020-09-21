const container = document.getElementById('container');
const gridBtn = document.getElementById('btnGrid');
const resetBtn = document.getElementById('btnReset')

let cells = 16;

gridBtn.addEventListener('click', userCells);
resetBtn.addEventListener('click', makeGrid);

function userCells() {
    cells = prompt('Please input the grid');
    makeGrid();
}

function makeGrid(){ 

    while (container.hasChildNodes()){
        container.removeChild(container.lastChild)
    }
    
    for (i = 0; i < (cells * cells); i++){
        
        const grid = document.createElement('div');
        grid.classList.add('grid');
        
        grid.addEventListener("mouseover", function(e) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            grid.style.backgroundColor = `#${randomColor}`;
        });
        container.appendChild(grid);
    }
    container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
}
makeGrid(cells);