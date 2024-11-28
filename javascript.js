function createGrid(size = 256) {
    const containerDiv = document.querySelector(".gridContainer");

    for(let i = 0; i < size; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "gridBox");
        newBox.setAttribute("id", (i+1))
        newBox.setAttribute("style", gridStyle);
        containerDiv.appendChild(newBox);
        console.log(`Created new box ${(i+1)}`);
        newBox.addEventListener('mouseover', changeColorBlue);
        newBox.addEventListener('mouseout', changeColorWhite);
        /*newBox.addEventListener('mouseout', delaytimer.changeColorWhite);*/
    }
}

const gridStyle = 
    `border-color: #000000; 
    border-width: 0.1px;
    border-style: solid;
    box-sizing: border-box;
    margin: 0px;
    aspect-ratio: 1/1;
    width: 24px;
    height: 24px;
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

createGrid();