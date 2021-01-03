// Single-responsibility principle

/*

	A class should only have a single responsibility, that is,
	only changes to one part of the software's specification
	should be able to affect the specification of the class.

 */

// Single-responsibility VIOLATION example

class IncorrectArticle {
	constructor(title, description) {
		this.title = title;
		this.description = description;
		this.modified = false;
	}

	update(description) {
		this.description = description;
		this.modified = true;
	}

	toHTML() {
		return `
			<div class='news'>
				<h1>${ this.title }</h1>
				<p>${ this.description }</p>
			</div>
		`;
	}

	toJSON() {
		return JSON.stringify({
			title: this.title,
			description: this.description,
			modified: this.modified
		},null, 2);
	}

	toXML() {
		return `
			<article>
				<title>${ this.title }</title>
				<text>${ this.description }</text>
			</article>
		`;
	}
}

const incorrectArticle = new IncorrectArticle('Title', 'Description');

console.log(incorrectArticle.toHTML());
console.log(incorrectArticle.toJSON());
console.log(incorrectArticle.toXML());

// CORRECT implementation of single-responsibility principle

/*

	The Article class is responsible for accepting the data
	that forms the article and updating that data.

*/

class Article {
	constructor(title, description) {
		this.title = title;
		this.description = description;
		this.modified = false;
	}

	update(description) {
		this.description = description;
		this.modified = true;
	}
}

/*

	The Printer class is responsible for
	outputting data in various formats.

*/

class Printer {
	constructor(article) {
		this.article = article;
	}

	toHTML() {
		return `
			<div class='news'>
				<h1>${ this.title }</h1>
				<p>${ this.description }</p>
			</div>
		`;
	}

	toJSON() {
		return JSON.stringify({
			title: this.article.title,
			description: this.article.description,
			modified: this.article.modified
		},null, 2);
	}

	toXML() {
		return `
			<article>
				<title>${ this.article.title }</title>
				<text>${ this.article.description }</text>
			</article>
		`;
	}
}

const printer = new Printer(new Article('Title', 'Description'));

console.log(printer.toHTML());
console.log(printer.toJSON());
console.log(printer.toXML());
