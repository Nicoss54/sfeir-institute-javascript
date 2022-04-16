import { beforeEach, describe, expect, test } from 'vitest';

/**TODO:
 * L'objectif de cette exercice est de faire passer les tests unitaires
 * Pour faire passer les tests unitaires il faut remplacer les "_" par la bonne réponse
 */

describe('PROTOTYPAGE', () => {
  describe('PROTOTYPAGE- CHAIN', () => {
    let father = null;
    let child = null;

    beforeEach(() => {
      father = { a: 3, b: 4 };
      child = Object.create(father);
      child.c = 1;
    });

    test('CHAIN - 01', () => {
      expect(child.a).toBe(_);
      expect(child.b).toBe(_);
      expect(child.c).toBe(_);
    });

    test('CHAIN - 02', () => {
      expect(child.hasOwnProperty('a')).toBe(_);
      expect(child.hasOwnProperty('b')).toBe(_);
      expect(child.hasOwnProperty('c')).toBe(_);
    });

    test('CHAIN - 03', () => {
      child.a++;
      expect(child.a).toBe(_);
      expect(father.a).toBe(_);
      expect(child.hasOwnProperty('a')).toBe(_);
    });
  });

  describe('PROTOTYPAGE - REFLECTION', () => {
    function A() {
      this.name = 'Frizzarin';
    }
    function B() {
      this.firstname = 'B';
    }

    B.prototype = new A();

    test('REFLECTION - 01', () => {
      const b = new B();
      expect(b.name).toBe(_);
    });

    test('REFLECTION - 02', () => {
      const b = new B();
      expect(Object.keys(b).length).toBe(_);
    });

    test('REFLECTION - 03', () => {
      const a = new A();
      const b = new B();

      expect(typeof a.constructor).toBe(_);
      expect(a.constructor.name).toBe(_);
      expect(b.constructor.name).toBe(_);
    });
  });

  describe('PROTOTYPAGE - HERITAGE', () => {
    function Mammal(name) {
      this.name = name;
    }

    Mammal.prototype.getName = function () {
      return this.name;
    };

    test('HERITAGE - 01', () => {
      const eric = new Mammal(_);
      expect(eric.getName()).toBe(_);
    });

    test('HERITAGE - 02', () => {
      const eric = new Mammal(_);
      Mammal.prototype.favoriteSong = function (song) {
        return `${this.name} likes ${song}`;
      };
      expect(eric.favoriteSong('The Sign')).toBe(_);
    });

    test('HERITAGE - 03', () => {
      const eric = new Mammal(_);
      Object.defineProperty(Mammal.prototype, 'numberOfLettersInName', {
        get() {
          return this.name.length;
        },
      });
      expect(eric.hasOwnProperty('numberOfLettersInName')).toBe(_);
      expect(eric.numberOfLettersInName).toBe(_);
    });
  });
});
