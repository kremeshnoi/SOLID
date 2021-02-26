/*

	Many client-specific interfaces are better
	than one general-purpose interface.

 */

interface TeslaSet {
	getTeslaSet(): any
}

interface AudiSet {
	getAudiSet(): any
}

interface BMWSet {
	getBMWSet(): any
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
