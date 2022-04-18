/**
 * @vitest-environment jsdom
 */

import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { AsynchronousSessionStorage } from './session-storage';

describe('asynchromisme.ts', () => {
  let sessionStorage;

  beforeAll(() => {
    sessionStorage = new AsynchronousSessionStorage();
  });
  describe('#clear', () => {
    test('should clear the session storage', async () => {
      window.sessionStorage.setItem('sfeir', 'luxembourg');
      await sessionStorage.clear();
      expect(window.sessionStorage.length).toBe(0);
    });
  });

  describe('#setItem', () => {
    test('should set the item', async () => {
      await sessionStorage.setItem('sfeir', 'luxembourg');
      expect(sessionStorage.length).toBe(1);
      expect(window.sessionStorage.length).toEqual(1);
    });

    afterAll(async () => {
      await sessionStorage.clear();
    });
  });

  describe('#remove', () => {
    test('should return an error because key does not exist', async () => {
      try {
        await sessionStorage.removeItem('sfeir');
      } catch (error) {
        expect(error).toEqual(new Error('key : sfeir not found'));
      }
    });

    test('should remove the item', async () => {
      window.sessionStorage.setItem('sfeir', 'luxembourg');
      await sessionStorage.removeItem('sfeir');
      expect(sessionStorage.length).toBe(0);
      expect(window.sessionStorage.length).toBe(0);
    });

    afterAll(async () => {
      await sessionStorage.clear();
    });
  });

  describe('#getItem', () => {
    test('should return an error because key does not exist', async () => {
      try {
        await sessionStorage.getItem('sfeir');
      } catch (error) {
        expect(error).toBeDefined();
        expect(error).toEqual(new Error('key : sfeir not found'));
      }
    });

    test('should get the item', async () => {
      window.sessionStorage.setItem('sfeir', 'luxembourg');
      const result = await sessionStorage.getItem('sfeir');
      expect(sessionStorage.length).toBe(1);
      expect(window.sessionStorage.length).toBe(1);
      expect(result).toEqual('luxembourg');
    });

    afterAll(async () => {
      await sessionStorage.clear();
    });
  });

  describe('#key', () => {
    test('should return an error because key does not exist', async () => {
      try {
        await sessionStorage.key(0);
      } catch (error) {
        expect(error).toBeDefined();
        expect(error).toEqual(new Error('no key for this index'));
      }
    });

    test('should get the name of the key', async () => {
      window.sessionStorage.setItem('sfeir', 'luxembourg');
      const result = await sessionStorage.key(0);
      expect(sessionStorage.length).toBe(1);
      expect(window.sessionStorage.length).toBe(1);
      expect(result).toEqual('sfeir');
    });

    afterAll(async () => {
      await sessionStorage.clear();
    });
  });
});
