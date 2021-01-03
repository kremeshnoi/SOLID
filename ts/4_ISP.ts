// Interface segregation principle

/*

	Many client-specific interfaces are better
	than one general-purpose interface.

 */

// Interface segregation VIOLATION example

interface IncorrectAutoSet {
	getTeslaSet(): any;
	getAudiSet(): any;
	getBMWSet(): any;
}

class IncorrectTesla implements IncorrectAutoSet {
	getTeslaSet(): any { /* ... */ }
	getAudiSet(): any { /* ... */ }
	getBMWSet(): any { /* ... */ }
}

class IncorrectAudi implements IncorrectAutoSet {
	getTeslaSet(): any { /* ... */ }
	getAudiSet(): any { /* ... */ }
	getBMWSet(): any { /* ... */ }
}

class IncorrectBMW implements IncorrectAutoSet {
	getTeslaSet(): any { /* ... */ }
	getAudiSet(): any { /* ... */ }
	getBMWSet(): any { /* ... */ }
}

// CORRECT implementation of interface segregation principle

interface TeslaSet {
	getTeslaSet(): any;
}

interface AudiSet {
	getAudiSet(): any;
}

interface BMWSet {
	getBMWSet(): any;
}

class Tesla implements TeslaSet {
	getTeslaSet(): any { /* ... */ }
}

class Audi implements AudiSet {
	getAudiSet(): any { /* ... */ }
}

class BMW implements BMWSet {
	getBMWSet(): any { /* ... */ }
}
