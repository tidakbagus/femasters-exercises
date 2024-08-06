var favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
function addFavoriteBook(book) {
  if (typeof book != "string") {
    return;
  }
  let x = book.toLowerCase();

  if (x.includes("great") == true) {
    return;
  }

  favoriteBooks.push(book);
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);

  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(`${i + 1}. ${favoriteBooks[i]}`);
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
addFavoriteBook("For The Greater Good");
addFavoriteBook("The greatest Warrior");
addFavoriteBook(12345);

// TODO: print out favorite books
printFavoriteBooks();
