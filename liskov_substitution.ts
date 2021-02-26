/*

	Objects in a program should be replaceable with instances
	of their subtypes without altering the correctness of that program.

 */

interface Figure {
	setWidth(width: number): void
	setHeight(width: number): void
}

class Rectangle implements Figure {
	setWidth(width: number) { /* ... */ }
	setHeight(width: number) { /* ... */ }
	areaOf() { /* ... */ }
}

class Square implements Figure {
	setWidth(width: number) { /* ... */ }
	setHeight(width: number) { /* ... */ }
	areaOf() { /* ... */ }
}
