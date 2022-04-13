import { describe, expect, test } from 'vitest';
import { person, person2, person3 } from './object';

describe('OBJECT', () => {
  test('should create a person', () => {
    expect(person.firstName).toEqual('Nicolas');
    expect(person.lastName).toEqual('Frizzarin');
    expect(person.age).toEqual(29);
  });

  test('should create a person with the age property no writable', () => {
    expect(person2.lastName).toEqual('Frizzarin');
    expect(person2.firstName).toEqual('Nicolas');
    expect(person2.age).toEqual(29);
    expect(() => {
      person2.age = 30;
    }).toThrow();
  });

  test('should create a person with that you can not access to the age property', () => {
    expect(Object.keys(person3).length).toEqual(2);
  });
});
