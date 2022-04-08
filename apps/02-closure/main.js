import './style.css';

/**
 * TODO:
 * Hoho nous avons un petit problème!!!!
 * Comment ça se fait que peut importe dans quel champs je focus j'ai toujours le même message d'aide de
 * Qu'est est encore cette entourloupe
 *
 * Avec les connaissances fraîchement acquises sur les différentes façon de déclarer les variables et les closures
 *
 * Corrigez ce bug pour faire en sorte que chaque focus d'un input affiche la bonne aide
 */

function displayHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function prepareHelp() {
  const helpText = [
    { id: 'lastName', text: 'Entrer your lastName' },
    { id: 'firstName', text: 'Entrer your firstName' },
    { id: 'age', text: 'Entrer your age' },
  ];

  for (var i = 0; i < helpText.length; i += 1) {
    var item = helpText[i];
    document.getElementById(item.id).addEventListener('focus', function () {
      displayHelp(item.text);
    });
  }
}

prepareHelp();
