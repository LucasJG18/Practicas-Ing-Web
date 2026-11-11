const tarjeta = document.querySelector('#tarjeta');
const btnAzul = document.querySelector('#btn-azul');
const btnVerde = document.querySelector('#btn-verde');
const btnRojo = document.querySelector('#btn-rojo');
const btnRestablecer = document.querySelector('#btn-restablecer');

btnAzul.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'blue';
    tarjeta.style.color = 'white';
});

btnVerde.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'green';
    tarjeta.style.color = 'white';
});

btnRojo.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'red';
    tarjeta.style.color = 'white';
});

btnRestablecer.addEventListener('click', () => {
    tarjeta.style.backgroundColor = '';
    tarjeta.style.color = 'black';
});