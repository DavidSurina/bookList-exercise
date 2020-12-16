
class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = "";
    }

    markAsRead() {
        this.read = true;
        this.read_date = new Date();
    }
}


class BookList {
    constructor(bookList) {
        this.bookList = [];
        this.readCounter = 0;
        this.unreadCounter = booklist.length - readCounter;
        this.nextBookRef = this.readCounter + 1;
        this.currentReadBook = 0;
        this.lastReadBook = 0;
    }

    addBook(book) {
        this.bookList.push(book);
        return this.bookList;
    }

    finishCurrentBook() {
        this.booklist[this.currentReadBook].markAsRead();
        this.readCounter++;
        this.currentReadBook++;
        if(this.currentReadBook > 0) {
            this.lastReadBook = this.currentReadBook -1;
        }
        return this.Booklist;
    }
}

const booklist1 = new BookList;

const book1 = new Book("Lord of the Rings", "High Fantasy", "J.R.R. Tolkien");
const book2 = new Book("Name of the Wind", "Fantasy", "Patrick Rothfuss");
const book3 = new Book("The Witcher", "Fantasy", "Andrzej Sapkowski");


booklist1.addBook(book1);
booklist1.addBook(book2);
booklist1.addBook(book3);

console.log(booklist1);

booklist1.finishCurrentBook();