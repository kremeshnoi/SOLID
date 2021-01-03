// Interface segregation principle

/*

	Many client-specific interfaces are better
	than one general-purpose interface.

 */

// Interface segregation VIOLATION example

class IncorrectAnimal {
	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log(`${ this.name } can walk`);
	}

	swim() {
		console.log(`${ this.name } can swim`);
	}

	fly() {
		console.log(`${ this.name } can fly`);
	}
}

class IncorrectDog extends IncorrectAnimal {
	fly() {
		return null;
	}
}

class IncorrectEagle extends IncorrectAnimal {
	swim() {
		return null;
	}
}

class IncorrectWhale extends IncorrectAnimal {
	fly() {
		return null;
	}

	walk() {
		return null;
	}
}

const incorrectDog = new IncorrectDog('Incorrect dog');

incorrectDog.walk();
incorrectDog.swim();
incorrectDog.fly();

const incorrectEagle = new IncorrectEagle('Incorrect eagle');

incorrectEagle.walk();
incorrectEagle.swim();
incorrectEagle.fly();

const incorrectWhale = new IncorrectWhale('Incorrect whale');

incorrectWhale.walk();
incorrectWhale.swim();
incorrectWhale.fly();

// CORRECT implementation of interface segregation principle

class Animal {
	constructor(name) {
		this.name = name;
	}
}

const canWalk = {
	walk() {
		console.log(`${ this.name } can walk`);
	}
}

const canSwim = {
	swim() {
		console.log(`${ this.name } can swim`);
	}
}

const canFly = {
	fly() {
		console.log(`${ this.name } can fly`);
	}
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, canWalk, canSwim);
Object.assign(Eagle.prototype, canFly, canWalk);
Object.assign(Whale.prototype, canSwim);

const dog = new Dog('Dog');

dog.walk();
dog.swim();

const eagle = new Eagle('Eagle');

eagle.walk();
eagle.fly();

const whale = new Whale('Whale');

whale.swim();
