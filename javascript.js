function createGrid(size = 16) {
    const containerDiv = document.querySelector(".gridContainer");

    for(let i = 0; i < size; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "gridBox");
        newBox.setAttribute("style", gridStyle);
        containerDiv.appendChild(newBox);
        console.log(`Created new box ${(i+1)}`)
    }
}

const gridStyle = 
    `border-color: #000000; 
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    margin: 2px;
    width: 40px;
    height: 40px;
    flex: auto`;

    
createGrid();