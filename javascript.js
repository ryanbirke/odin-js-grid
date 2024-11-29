let sideLength = 16;

function createGrid(length = sideLength) {
    const containerDiv = document.querySelector(".gridContainer");
    const size = length*length;

    for(let i = 0; i < size; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "gridBox");
        newBox.setAttribute("id", (i+1))
        newBox.setAttribute("style", gridStyle);
        newBox.style.height = `${400/length}px`;
        newBox.style.width = `${400/length}px`;
        containerDiv.appendChild(newBox);
        console.log(`Created new box ${(i+1)}`);
        console.log(newBox.getAttribute('style'));
        newBox.addEventListener('mouseover', changeColorBlue);
        newBox.addEventListener('mouseout', changeColorWhite);
    }
}

let gridStyle = 
    `border-color: #000000; 
    border-width: 0.01px;
    border-style: solid;
    box-sizing: border-box;
    margin: 0px;
    aspect-ratio: 1/1;
    flex: auto;`;

const boxes = document.querySelectorAll('.gridBox');

boxes.forEach(box => {
    box.addEventListener('mouseover', changeColor);
    console.log("added listener");
});

function changeColorBlue() {
    this.style.backgroundColor = 'blue';
};

function changeColorWhite() {
    this.style.backgroundColor = 'white';
};

function delayTimer(time = 3000) {
    timeoutID = setTimeout(time);
};

function updateGridSize() {
    let length = getGridSize();
    removeGrid();
    createGrid(length);
};

function getGridSize() {
    sideLength = prompt('Enter new grid side length:');
    return sideLength;
};

function removeGrid() {
    const containerDiv = document.querySelector(".gridContainer");
    while (containerDiv.firstChild) {
        containerDiv.firstChild.remove();
    };
};

const button = document.querySelector('button');

button.addEventListener('click', updateGridSize);

createGrid();