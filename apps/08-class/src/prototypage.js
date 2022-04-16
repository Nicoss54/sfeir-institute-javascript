export const Animal = function (food, isDisparition) {
  this.food = food;
  this.isDisparition = isDisparition;
};

export const Cat = function () {
  this.type = 'CAT';
  Animal.call(this, 'milk', false);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Animal.prototype.eat = function () {
  return `This animal love to eat ${this.food}`;
};

Cat.prototype.whatCatLoveToEat = function () {
  return `Cat love to eat ${this.food}`;
};

export const CAT = new Cat();
