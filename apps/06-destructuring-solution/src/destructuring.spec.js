import { describe, expect, test } from 'vitest';

describe('DESTRUCTURING', () => {
  let person = { lastName: 'Frizzarin', firstName: 'Nicolas', age: 29 };
  let personArray = ['Frizzarin', 'Nicolas', 29];

  describe('DESTRUCTURING - OBJECT', () => {
    test('should retrieve the lastname and firstname', () => {
      const { firstName, lastName } = person;
      expect(firstName).toEqual('Nicolas');
      expect(lastName).toEqual('Frizzarin');
    });
    test('should retrieve the age of the person and rename it to agePerson', () => {
      const { age: agePerson } = person;
      expect(agePerson).toEqual(29);
    });
    test('should directly destructure the person in sayHello function', () => {
      function sayHello({ lastName, firstName }) {
        return `Hello, I am ${firstName} ${lastName}`;
      }
      expect(sayHello(person)).toEqual('Hello, I am Nicolas Frizzarin');
    });
  });

  describe('DESTRUCTURING - ARRAY', () => {
    test('should retrieve only the firstname', () => {
      const [, firstName] = personArray;
      expect(firstName).toEqual('Nicolas');
    });
    test('should retrieve the lastname and create an array with the rest of the initial array', () => {
      const [lastName, ...rest] = personArray;
      expect(lastName).toEqual('Frizzarin');
      expect(rest).toEqual(['Nicolas', 29]);
    });
    test('should directly destructure the person in the sayAge function', () => {
      function sayAge([, , age]) {
        return `I am ${age} years old`;
      }
      expect(sayAge(personArray)).toEqual('I am 29 years old');
    });
  });
});
