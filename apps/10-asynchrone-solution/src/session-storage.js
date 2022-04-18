export class AsynchronousSessionStorage {
  constructor() {}

  /**
   * @name clear
   * @description
   *  - clear the  sessionStorage
   * @return { Promise<void> }
   */
  async clear() {
    return new Promise(resolve => resolve(globalThis.sessionStorage.clear()));
  }

  /**
   * @name getItem
   * @param { string } key
   * @description
   *  - get the value of sessionStorage name pass in parameters
   */
  async getItem(key) {
    return new Promise((resolve, reject) => {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        return resolve(item);
      }
      return reject(new Error(`key : ${key} not found`));
    });
  }

  /**
   * @name key
   * @description
   *  - give the name of the key for the index pass in params
   */
  async key(index) {
    return new Promise((resolve, reject) => {
      const keyName = globalThis.sessionStorage.key(index);
      if (keyName) {
        return resolve(keyName);
      }
      return reject(new Error(`no key for this index`));
    });
  }
  /**
   * @name removeItem
   * @description
   *  - remove an item of session storage
   * @param { string } key
   */
  async removeItem(key) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.getItem(key);
        return resolve(globalThis.sessionStorage.removeItem(key));
      } catch (error) {
        return reject(error);
      }
    });
  }
  /**
   * @name setItem
   * @param { string } key
   * @param { string } value
   */
  async setItem(key, value) {
    return new Promise(resolve => resolve(globalThis.sessionStorage.setItem(key, value)));
  }

  get length() {
    return window.sessionStorage.length;
  }
}
