var favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
function addFavoriteBook(book) {
  let x = book.toLowerCase();
  if (x.includes("great") == false) {
    favoriteBooks.push(book);
  } else return;
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks(books) {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
addFavoriteBook("For The Greater Good");
addFavoriteBook("The greatest Warrior");

// TODO: print out favorite books
printFavoriteBooks(favoriteBooks);
