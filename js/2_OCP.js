// Open–closed principle

/*

	Software entities ... should be open for extension,
	but closed for modification.

 */

// Open–closed VIOLATION example

class IncorrectSquare {
	constructor(size) {
		this.type = 'square';
		this.size = size;
	}
}

class IncorrectCircle {
	constructor(radius) {
		this.type = 'circle';
		this.radius = radius;
	}
}

/*class Rectangle { <---- VIOLATION
	constructor(width, height) {
		this.type = 'rectangle';
		this.width = width;
		this.height = height;
	}
}*/

class IncorrectAreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes;
	}

	sum() {
		return this.shapes.reduce((acc, shape) => {
			if (shape.type === 'circle') acc += (shape.radius ** 2) * Math.PI;
			else if (shape.type === 'square') acc += shape.size ** 2;
			// else if (shape.type === 'rectangle') acc += shape.width * shape.height; <---- VIOLATION
			return acc;
		}, 0);
	}
}

const incorrectCalc = new IncorrectAreaCalculator([
	new IncorrectSquare(10),
	new IncorrectCircle(1),
	new IncorrectCircle(5)
]);

console.log(incorrectCalc.sum());

// CORRECT implementation of open–closed principle

class Shape {
	area() {
		throw new Error('Area method should be implemented');
	}
}

class Square extends Shape {
	constructor(size) {
		super();
		this.size = size;
	}

	area() {
		return this.size ** 2;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	area() {
		return (this.radius ** 2) * Math.PI;
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}
}

class AreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes;
	}

	sum() {
		return this.shapes.reduce((acc, shape) => {
			acc += shape.area();

			return acc;
		}, 0);
	}
}


const calc = new AreaCalculator([
	new Square(10),
	new Circle(1),
	new Circle(5),
	new Rectangle(10, 50)
]);

console.log(calc.sum());
