function createGrid(size = 10) {
    const containerDiv = document.querySelector(".gridContainer");

    for(let i = 0; i < size; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "gridBox");
        containerDiv.appendChild(newBox);
        console.log(`Created new box ${(i+1)}`)
    }
}

createGrid();