export function createArray() {
  return Array.from({ length: 10 }).map((value, index) => index + 1);
}

export function addElement(array) {
  array.push(11); // array.concat(11)
  return array;
}

export function removeTwoLastElement(array) {
  array.splice(array.length - 2, 2);
  return array;
}

export function getIndexOf(array) {
  return array.findIndex(value => value === 5);
}

export function keepTheFiveFirstElement(array) {
  return array.slice(0, 5);
}

export function transformArrayOnObject(array) {
  const reducer = (acc, currentValue, index) => {
    acc = { ...acc, [index]: currentValue };
    return acc;
  };
  return array.reduce(reducer, {});
}
