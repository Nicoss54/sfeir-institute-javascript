import { describe, expect, test } from 'vitest';
import { Cat, CAT } from './class';

describe('CLASS', () => {
  test('should create an instance of cat', () => {
    expect(CAT).toBeInstanceOf(Cat);
  });
  test('instance of cat should be define by type, isDisparition and food properties', () => {
    expect(CAT.type).toBe('CAT');
    expect(CAT.isDisparition).toBe(false);
    expect(CAT.food).toBe('milk');
  });
  test('instance of cat must have a generic method eat', () => {
    expect(CAT.eat()).toEqual('This animal love to eat milk');
  });
  test('instance of cat should have a method whatCatLoveToEat', () => {
    expect(CAT.whatCatLoveToEat()).toEqual('Cat love to eat milk');
  });
});
