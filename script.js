//Generate boxes
makeGrid();



//Refresh button
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', makeGrid);

//Code to create the boxes on an Etch a Sketch
function makeGrid(){
    const grid = document.querySelector('#gridContainer');
    grid.innerHTML='';
    for (var i = 1; i < 400; i++){
        const box = document.createElement('div');
        box.classList.add('floating-box');
        grid.appendChild(box);
    };

    //change colour
    const allCells = document.querySelectorAll('.floating-box');
    allCells.forEach(cell=>cell.addEventListener('mouseover', (e)=>{
        cell.style.backgroundColor = 'Black';
    }));
};
