// Liskov substitution principle

/*

	Objects in a program should be replaceable with instances
	of their subtypes without altering the correctness of that program.

 */

// Liskov substitution VIOLATION example

class IncorrectRectangle {
	constructor(public width: number, public height: number) { /* ... */ }

	setWidth(width: number) {
		this.width = width;
	}

	setHeight(height: number) {
		this.height = height;
	}

	areaOf():number {
		return this.width * this.height;
	}
}

class IncorrectSquare extends IncorrectRectangle {
	width: number = 0;
	height: number = 0;

	constructor(size: number) {
		super(size, size);
	}

	setWidth(width: number) {
		this.width = width;
		this.height = width;
	}

	setHeight(height: number) {
		this.width = height;
		this.height = height;
	}
}

const incorrectSquare = new IncorrectSquare(20);
incorrectSquare.setWidth(30);
incorrectSquare.setHeight(40);

// CORRECT implementation of Liskov substitution principle

interface Figure {
	setWidth(width: number): void;
	setHeight(width: number): void;
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
