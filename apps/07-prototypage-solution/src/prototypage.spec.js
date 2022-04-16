import { beforeEach, describe, expect, test } from 'vitest';

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
      expect(child.a).toBe(3);
      expect(child.b).toBe(4);
      expect(child.c).toBe(1);
    });

    test('CHAIN - 02', () => {
      expect(child.hasOwnProperty('a')).toBe(false);
      expect(child.hasOwnProperty('b')).toBe(false);
      expect(child.hasOwnProperty('c')).toBe(true);
    });

    test('CHAIN - 03', () => {
      child.a++;
      expect(child.a).toBe(4);
      expect(father.a).toBe(3);
      expect(child.hasOwnProperty('a')).toBe(true);
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
      expect(b.name).toBe('Frizzarin');
    });

    test('REFLECTION - 02', () => {
      const b = new B();
      expect(Object.keys(b).length).toBe(1);
    });

    test('REFLECTION - 03', () => {
      const a = new A();
      const b = new B();

      expect(typeof a.constructor).toBe(typeof A);
      expect(a.constructor.name).toBe('A');
      expect(b.constructor.name).toBe('A');
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
      const eric = new Mammal('Eric');
      expect(eric.getName()).toBe('Eric');
    });

    test('HERITAGE - 02', () => {
      const eric = new Mammal('Eric');
      Mammal.prototype.favoriteSong = function (song) {
        return `${this.name} likes ${song}`;
      };
      expect(eric.favoriteSong('The Sign')).toBe('Eric likes The Sign');
    });

    test('HERITAGE - 03', () => {
      const eric = new Mammal('Eric');
      Object.defineProperty(Mammal.prototype, 'numberOfLettersInName', {
        get() {
          return this.name.length;
        },
      });
      expect(eric.hasOwnProperty('numberOfLettersInName')).toBe(false);
      expect(eric.numberOfLettersInName).toBe(4);
    });
  });
});
