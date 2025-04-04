const myLibrary = [];

function Book(cover, title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.cover = cover;
  this.title = title;
  this.author = author;
  this.pages = pages
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(cover, title, author, pages, read) {
  myLibrary.push(new Book(cover, title, author, pages, read));
}

addBookToLibrary("images/4HourWorkWeek.jpg", "The 4-Hour Workweek", "Tim Ferriss", 448, true);
addBookToLibrary("images/neverSplitTheDifference.jpg", "Never Split the Difference", "Chris Voss", 288, true);
addBookToLibrary("images/theHobbit.jpg", "The Hobbit", "J.R.R. Tolkien", 304, false);
addBookToLibrary("images/captivate.jpg", "Captivate", "Vanessa Van Edwards", 320, true);

function display() {
    const container = document.querySelector(".bookContainer");

    for (let item in myLibrary) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("card");

        for (let prop in myLibrary[item]) {
            const value = myLibrary[item][prop];

            if (prop === 'cover') {
                const img = document.createElement("img");
                img.src = value;
                img.alt = "A cover of the book";
                img.classList.add("cover-image");

                bookDiv.appendChild(img);
            }

            else if (prop === 'title') {
                const h3 = document.createElement("h3");
                h3.textContent = value;
                
                bookDiv.appendChild(h3);
            }

            else if (prop === 'author' || prop === 'pages') {
                const p = document.createElement("p");
                p.textContent = prop.charAt(0).toUpperCase() + prop.slice(1)
                                 + ': ' + value;

                bookDiv.appendChild(p);
            }

            else if (prop === 'read') {
                if (value === true) {
                    const p = document.createElement("p");
                    p.textContent = "Read" + ": " + '✅';

                    bookDiv.appendChild(p);
                } else {
                    const p = document.createElement("p");
                    p.textContent = "Read" + ": " + '❌';

                    bookDiv.appendChild(p);
                }
            }

            container.appendChild(bookDiv);
        }
    }
}

display();

const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const showButton = document.querySelector(".add");
const closeButton = document.querySelector("dialog button");
const confirmButton = dialog.querySelector("#confirmButton");

function clearForm() {
    form.reset();
}

function refreshDisplay() {
    const container = document.querySelector(".bookContainer");
    container.innerHTML = "";
    display();
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector("#bookPages").value;
    const read = document.querySelector("input[name='readStatus']:checked")?.value === "true";
    
    const defaultCover = "images/default.jpeg";
    addBookToLibrary(defaultCover, title, author, pages, read);

    dialog.close();
    clearForm();
    refreshDisplay();
});

// # 5 Remove Book Button


// # 6 Change Read Status