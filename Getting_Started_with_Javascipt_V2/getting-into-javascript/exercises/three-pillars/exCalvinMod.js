// Define a Bookshelf class with a constructor that initializes an empty favoriteBooks array
class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// Define a method to add a book to the favoriteBooks array, but only if the book name does not contain "Great"
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	// Define a method to print the number of favorite books and each book name
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(String(bookName));
		}
	}
}

// Define a function that loads books from an API and adds them to the specified bookshelf
function loadBooks(bookshelf) {
	// Use a fakeAjax function to simulate loading books from an API
	fakeAjax(BOOK_API, function getBooks(books) {
		// Iterate over each book in the array of books and add it to the bookshelf's favoriteBooks array
		for (let book of books) {
			bookshelf.addFavoriteBook(book);
		}

		bookshelf.printFavoriteBooks();
	});
}

// Define a variable that specifies the URL of the book API and create a new Bookshelf object
var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();

// Call the loadBooks function to load books from the API and add them to the myBooks bookshelf
loadBooks(myBooks);

// Define a fakeAjax function that simulates loading data from an API and calls a callback function with the loaded data
function fakeAjax(url, cb) {
	setTimeout(function fakeLoadingDelay() {
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	}, 500);
}
