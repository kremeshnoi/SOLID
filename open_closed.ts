// Open–closed principle

/*

	Software entities ... should be open for extension,
	but closed for modification.

 */

abstract class CarPrice {
	abstract getPrice(): string
}

class Toyota extends CarPrice {
	getPrice(): string {
		return "80 000$"
	}
}

class Mercedes extends CarPrice {
	getPrice(): string {
		return "70 000$"
	}
}

class Volkswagen extends CarPrice {
	getPrice(): string {
		return "50 000$"
	}
}

const shop: Array<CarPrice> = [
	new Toyota(),
	new Mercedes(),
	new Volkswagen()
]

const getPrice = (auto: Array<CarPrice>): string | void => {
	for (let i = 0; i < auto.length; i++) {
		auto[i].getPrice()
	}
}

getPrice(shop)
