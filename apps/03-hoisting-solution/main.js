import './style.css';

const appElement = document.querySelector('#app');

appElement.textContent = sayHi();

function sayHi() {
  return `Je m'appelle Nicolas Frizzarin et j'ai 29 ans`;
}
