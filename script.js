let currentMode = 'color';
let click = true;
let isDrawing = false;

function populateBoard(size){
    let container = document.querySelector('.pad');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for(let i = 0; i < amount; i++){
        let grid = document.createElement('div');
        grid.addEventListener("mouseover", draw)
        grid.classList.add('grid');
        grid.style.backgroundColor = 'white';
        container.appendChild(grid);
    }
}

populateBoard(16);


let h2 = document.querySelector('h2');
let rainbow = document.querySelector('.rainbow');
let eraser = document.querySelector('.eraser');
let clear = document.querySelector('.clear');
let colorPicker = document.querySelector("#colorPicker");
let color = '#000000';

colorPicker.oninput = (e) => changeColor(e.target.value);
rainbow.onclick = () => currentMode = 'rainbow';
eraser.onclick = () => currentMode = 'eraser';
clear.onclick = () => clearBoard();


function gridSize(value){
    populateBoard(value);
    h2.textContent = value + " X " + value;
    
}

function draw(e){
        if(currentMode === 'color'){
            e.target.style.backgroundColor = changeColor(color);
        }
        else if(currentMode === 'rainbow'){
            e.target.style.backgroundColor = rainbowColor();
        }
        else if(currentMode === 'eraser'){
            e.target.style.backgroundColor = erase();
        }
        this.style.backgroundColor = color;
}

function changeColor(choice){
    currentMode = 'color';
    color = choice;
}

function rainbowColor(){
    color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function erase(){
    color = "#ffffff";
}

function clearBoard(){
    let container = document.querySelector('.pad');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}


