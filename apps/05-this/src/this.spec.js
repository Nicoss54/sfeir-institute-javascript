// @vitest-environment jsdom

/**TODO:
 * Le but de cette exercice est de faire passer les tests unitaires
 * Pour les trois premiers exercice il faut remplacer le _ par la bonne expression
 * Pour le dernier exercice il faut corriger le code pour faire passer le test
 */

import { describe, expect, test } from 'vitest';

describe('THIS', () => {
  test('should show the name of the person', () => {
    const person = {
      fullName: 'Nicolas Frizzarin',
      sayHello: function () {
        return `Hello, my name is ${_}`;
      },
    };

    expect(person.sayHello()).toEqual('Hello, my name is Nicolas Frizzarin');
  });

  test('should override the name of the person', () => {
    const person = {
      fullName: 'Nicolas Frizzarin',
      sayHello: function () {
        return `Hello, my name is ${this.fullName}`;
      },
    };

    window.fullName = 'SFEIR Luxembourg';

    expect(_).toEqual('Hello, my name is SFEIR Luxembourg');
  });

  test('should override the name of the person with your own context', () => {
    const person = {
      fullName: 'Nicolas Frizzarin',
      sayHello: function () {
        return `Hello, my name is ${this.fullName}`;
      },
    };

    const sayHello = _;

    expect(sayHello()).toEqual('Hello, my name is SFEIR Luxembourg');
  });

  test('should find the max', () => {
    const number = [1, 34, 49, 12];

    const findMaxObject = {
      max: 0,
      findMax: function (numbers) {
        numbers.forEach(function (number) {
          if (number > this.max) {
            this.max = number;
          }
        });
      },
    };

    findMaxObject.findMax(number);

    expect(findMaxObject.max).toEqual(49);
  });
});
