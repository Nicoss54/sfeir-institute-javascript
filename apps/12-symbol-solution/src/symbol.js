/**
 * TODO: A l'aide des symbol écrivez le corps de la fonction qui vous permet de transformer un objet en tableau
 * @type {function}
 * @param object
 * @returns {*[]}
 */
export default object => {
  object[Symbol.iterator] = function* () {
    for (let key in this) {
      yield `${key}: ${this[key]}`;
    }
  };
  return [...object];
};
