const btn = document.querySelector('#btn');
const nav = document.querySelector('#nav');
const products_line = document.querySelector('.products-line');




const createDiv = () => {
    let div = document.createElement('div');
    div.setAttribute('class', 'products-line');

    for (i = 0; i < 4; i++) {
        div.innerHTML += `<div class='products-card'><img src="./images/i5.png" alt=""><p>PROCESSADOR INTEL I5</p><label for="">R$1000</label></div>`;
    }
    return div;
}

button.addEventListener('click', () => {
    button = document.createElement('button')
    nav.appendChild(createDiv(), null);
    nav.appendChild(button);
    console.log(nav);
})




// console.log(createDiv())
