// # 2.
const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The 4-Hour Workweek", "Tim Ferriss", 448, true);
addBookToLibrary("Never Split the Difference", "Chris Voss", 288, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304, false);
addBookToLibrary("Captivate", "Vanessa Van Edwards", 320, true);

// #3
function display() {
    for (let item in myLibrary) {
        console.log(myLibrary[item]);
        for (let prop in myLibrary[item]) {
            console.log(myLibrary[item][prop]);
        }
    }
}

display();


// 1. Write a function that loops through arrary
