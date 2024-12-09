const books = require('../data/books')


function index(req, res) {
    res.render('books', { title: "Book List", books })
}


function newBook(req, res) {
    res.render('books/new', { title: 'New Book' })
}

function postBook(req, res) {
    const newBook = {
        id: books.length + 1,
        title: req.body.title || "new book",
        author: req.body.author || "new author"
    }
    books.push(newBook);
    res.status(201).redirect('/books')
}

function showBook(req, res) {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (book) {
        res.render('books/show', { title: 'Book Details', book })
    } else {
        res.status(404).render('404/notFound', { title: "Book not found" })
    }
}


function editBook(req, res) {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (book) {
        res.render('books/edit', { title: 'Edit Book', book });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found!' })
    }
}

function updateBook(req, res) {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...req.body };
        res.status(200).redirect(`/books`);
        // res.render('bookUpdated', { title: 'Book Updated', book: books[bookIndex] });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
}

function deleteBook(req, res) {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
    res.redirect('/books');
}

module.exports = { index, newBook, postBook, editBook, updateBook, showBook, deleteBook }