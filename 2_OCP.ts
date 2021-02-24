// Open–closed principle

/*

	Software entities ... should be open for extension,
	but closed for modification.

 */

// Open–closed VIOLATION example

class IncorrectAuto {
	constructor(public model: string) { /* ... */ }
	getCarModel() { /* ... */ }
}

/*
	When new data appears, we will have to modify
	our method, which violates this principle.
 */

const incorrectShop: Array<IncorrectAuto> = [
	new IncorrectAuto('Tesla'),
	new IncorrectAuto('Audi'),
	// new Auto('BMW') <--- VIOLATION
];

const getIncorrectPrice = (auto: Array<IncorrectAuto>): string | void => {
	for (let i = 0; i < auto.length; i++) {
		switch (auto[i].model) {
			case 'Tesla': return '80 000$';
			case 'Audi': return '50 000$';
			// case 'BMW': return '70 000&'; <---- VIOLATION
			default: return 'No Auto Price';
		}
	}
};

getIncorrectPrice(incorrectShop);

// CORRECT implementation of open–closed principle

abstract class CarPrice {
	abstract getPrice(): string
}

class Tesla extends CarPrice {
	getPrice(): string {
		return '80 000$';
	}
}

class Audi extends CarPrice {
	getPrice(): string {
		return '50 000$';
	}
}

class BMW extends CarPrice {
	getPrice(): string {
		return '70 000$';
	}
}

const shop: Array<CarPrice> = [
	new Tesla(),
	new Audi(),
	new BMW()
];

const getPrice = (auto: Array<CarPrice>): string | void => {
	for (let i = 0; i < auto.length; i++) {
		auto[i].getPrice();
	}
};

getPrice(shop);
