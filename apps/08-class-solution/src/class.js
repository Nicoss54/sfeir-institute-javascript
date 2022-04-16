export class Animal {
  constructor(food, isDisparition) {
    this.food = food;
    this.isDisparition = isDisparition;
  }

  eat() {
    return `This animal love to eat ${this.food}`;
  }
}

export class Cat extends Animal {
  constructor() {
    super('milk', false);
    this.type = 'CAT';
  }

  whatCatLoveToEat() {
    return `Cat love to eat ${this.food}`;
  }
}

export const CAT = new Cat();
