import './styles.css';

document.querySelector('body').style.backgroundColor = '#ff0';

for (let i = 0; i <= 100; i++) {
    document.querySelector('#root').innerHTML += `<div id="item">${i}</div>`;
}