import { describe, expect, test } from 'vitest';
import symbolTransformation from './symbol';

describe('SYMBOL', () => {
  test('return an array', () => {
    expect(symbolTransformation({ a: 8, b: 9, c: 'SFEIR' }), ['a: 8', 'b: 9', 'c: SFEIR']);
  });
});
