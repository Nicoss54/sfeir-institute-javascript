import { describe, expect, test } from 'vitest';
import {
  addElement,
  createArray,
  getIndexOf,
  keepTheFiveFirstElement,
  removeTwoLastElement,
  transformArrayOnObject,
} from './array';

describe('ARRAY', () => {
  test('must create an array of the first ten number', () => {
    expect(createArray()).toBeDefined();
    expect(createArray().length).toEqual(10);
    expect(createArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('must add the eleven element with the value 11', () => {
    expect(addElement(createArray()).length).toEqual(11);
    expect(addElement(createArray())[10]).toEqual(11);
  });

  test('must have eight elements and the last element must have the value 8', () => {
    expect(removeTwoLastElement(createArray()).length).toEqual(8);
    expect(addElement(createArray())[7]).toEqual(8);
  });

  test('must return the index for value === 5', () => {
    expect(getIndexOf(createArray())).toEqual(4);
  });

  test('must keep the first five elements', () => {
    expect(keepTheFiveFirstElement(createArray()).length).toEqual(5);
    expect(keepTheFiveFirstElement(createArray())[4]).toEqual(5);
  });

  test('must transform array on object like { index: array[index] }', () => {
    expect(Object.keys(transformArrayOnObject(createArray())).length).toEqual(10);
    expect(transformArrayOnObject(createArray())[0]).toEqual(1);
  });
});
