import { describe, expect, test } from 'vitest';
import { generatorFunction } from './generator';

describe('GENERATOR', () => {
  test('must generate the seven number of fibo suite', () => {
    expect(generatorFunction()).toEqual(13);
  });
});
