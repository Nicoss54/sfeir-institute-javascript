import { describe, expect, test } from 'vitest';

/**TODO:
 * L'objectif de cet exercice est de faire passer les tests unitaires
 * la consigne pour faire passer le test unitaire se trouve être le descriptif du test => test('consigne')
 */

describe('DESTRUCTURING', () => {
  const person = { lastName: 'Frizzarin', firstName: 'Nicolas', age: 29 };
  const personArray = ['Frizzarin', 'Nicolas', 29];

  describe('DESTRUCTURING - OBJECT', () => {
    test('should retrieve the lastname and firstname', () => {
      expect(firstName).toEqual('Nicolas');
      expect(lastName).toEqual('Frizzarin');
    });
    test('should retrieve the age of the person and rename it to agePerson', () => {
      expect(agePerson).toEqual(29);
    });
    test('should directly destructure the person in sayHello function', () => {
      function sayHello() {
        return `Hello, I am ${firstName} ${lastName}`;
      }
      expect(sayHello(person)).toEqual('Hello, I am Nicolas Frizzarin');
    });
  });

  describe('DESTRUCTURING - ARRAY', () => {
    test('should retrieve only the firstname', () => {
      expect(firstName).toEqual('Nicolas');
    });
    test('should retrieve the lastname and create an array with the rest of the initial array', () => {
      expect(lastName).toEqual('Frizzarin');
      expect(rest).toEqual(['Nicolas', 29]);
    });
    test('should directly destructure the person in the sayAge function', () => {
      function sayAge() {
        return `I am ${age} years old`;
      }
      expect(sayAge(personArray)).toEqual('I am 29 years old');
    });
  });
});
