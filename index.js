

const MainContainer = document.querySelector(".container");
const button = document.querySelector(".button");



function createDiv(numOfGrids) {
    for(let i = 1; i <= numOfGrids; i++){
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
        const row = document.createElement('div');
        row.classList.add("rows");
        wrapper.appendChild(row);

        for(let j = 1; j <= numOfGrids; j++){
            const box = document.createElement('div');
        box.classList.add("boxes");

        box.addEventListener('mouseenter', () =>  {
            box.style.backgroundColor = 'black'
        })
        row.appendChild(box);
        }
        MainContainer.appendChild(wrapper)
        
    }

}
createDiv(16)

button.addEventListener('click', () => {
    let userSize = Number(prompt('What would you like to reset the grid to?'));

    while (userSize > 100) {
        userSize = Number(prompt('What would you like to reset the grid to? It should be less than 100.'));
        
    }
    const wrapper = document.querySelectorAll('.wrapper');
    wrapper.forEach(wrapper => wrapper.remove());
    createDiv(userSize)
})

