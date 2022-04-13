// @vitest-environment jsdom

import { describe, expect, test } from 'vitest';

describe('THIS', () => {
  test('should show the name of the person', () => {
    const person = {
      fullName: 'Nicolas Frizzarin',
      sayHello: function () {
        return `Hello, my name is ${this.fullName}`;
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

    expect(person.sayHello.call(window)).toEqual('Hello, my name is SFEIR Luxembourg');
  });

  test('should override the name of the person with your own context', () => {
    const person = {
      fullName: 'Nicolas Frizzarin',
      sayHello: function () {
        return `Hello, my name is ${this.fullName}`;
      },
    };

    const sayHello = person.sayHello.bind({ fullName: 'SFEIR Luxembourg' });

    expect(sayHello()).toEqual('Hello, my name is SFEIR Luxembourg');
  });

  test('should find the max', () => {
    const number = [1, 34, 49, 12];

    const findMaxObject = {
      max: 0,
      findMax: function (numbers) {
        numbers.forEach(
          function (number) {
            if (number > this.max) {
              this.max = number;
            }
          }.bind(this)
        );
      },
    };

    findMaxObject.findMax(number);

    expect(findMaxObject.max).toEqual(49);
  });
});
