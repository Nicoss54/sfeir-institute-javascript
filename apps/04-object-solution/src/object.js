/**TODO:
 * A l'aide des tests unitaires, créez trois personnes différentes qui feront passer les tests unitaires
 */

export const person = { firstName: 'Nicolas', lastName: 'Frizzarin', age: 29 };

export const person2 = Object.defineProperties(
  {},
  {
    firstName: { value: 'Nicolas', writable: true, enumerable: true, configurable: false },
    lastName: { value: 'Frizzarin', writable: true, enumerable: true, configurable: false },
    age: { value: 29, writable: false, enumerable: true, configurable: false },
  }
);

export const person3 = Object.defineProperties(
  {},
  {
    firstName: { value: 'Nicolas', writable: true, enumerable: true, configurable: false },
    lastName: { value: 'Frizzarin', writable: true, enumerable: true, configurable: false },
    age: { value: 29, writable: true, enumerable: false, configurable: false },
  }
);
