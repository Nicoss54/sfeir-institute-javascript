import './style.css';

/**
 * TODO:
 *
 * Déclarer de trois façons différentes les variables suivantes:
 *  - lastName
 *  - firstName
 *  - age
 *
 * Amusez vous avec vos variables pour constater les différentes propriétés que vous offres les différents mots clé de déclaration
 *
 * Affichez vos variables à l'aide de l'instruction console.log()
 *
 * Pensez bien à inspecter votre page en faisant click-droit/inspecter
 *
 * Rendez vous dans l'onglet console de l'inspection pour voir vos résultats
 */

const lastName = 'FRIZZARIN';
let firstName = 'Nicolas';
var age = 29;

const divElement = document.createElement('div');
divElement.innerHTML = `Je m'appelle ${firstName} ${lastName} et j'ai ${age} ans`;

document.querySelector('#app').appendChild(divElement);
