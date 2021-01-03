// Single-responsibility principle

/*

	A class should only have a single responsibility, that is,
	only changes to one part of the software's specification
	should be able to affect the specification of the class.

 */

// Single-responsibility VIOLATION example

class IncorrectAuto {
	constructor(model: string) { /* ... */ }
	setCarModel() { /* ... */ }
	getCarModel() { /* ... */ }
	setCustomerOrder(order: IncorrectAuto) { /* ... */ }
	getCustomerOrder(id: string) { /* ... */ }
	removeCustomerOrder(id: string) { /* ... */ }
	updateCarSet(set: object) { /* ... */ }
}

// CORRECT implementation of single-responsibility principle

class Auto {
	constructor(model: string) { /* ... */ }
	setCarModel() { /* ... */ }
	getCarModel() { /* ... */ }
}

class CustomerAuto {
	setCustomerOrder(order: Auto) { /* ... */ }
	getCustomerOrder(id: string) { /* ... */ }
	removeCustomerOrder(id: string) { /* ... */ }
}

class AutoDB {
	updateCarSet(set: object) { /* ... */ }
}
