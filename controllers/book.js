const books = require('../data/books');


// Index
app.get('/', (req, res) => {
    res.render('home', { title: 'Library' });
});
app.get('/books', (req, res) => {
    res.render('book', { title: "Book List", books: books });
});

app.get('/books/new', (req, res) => {
    res.render('book/new.ejs', { title: 'New Book' });
});

app.get('/books/:id', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    if (book) {
        res.render('book/show', { title: book.title, book: book });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
});

// New
app.post('/books/new', (req, res) => {
    const newBook = { id: books.length + 1, title: 'New Book', author: 'New Author' };
    books.push(newBook);
    console.log(books);
    const response = `New book created: ${newBook.title} by ${newBook.author}`;
    res.send(response);
})

// app.post('/seed', async (req, res) => {
//     try {
//         await Book.insertMany(books)
//         res.status(201).send('books seeding')
//     } catch (error) {
//         console.log(error.message)
//         res.status(404).send('error seeding bok')
//     }
// });

// Delete
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIdx = books.findIndex(book => book.id === bookId);
    if (bookIdx !== -1) {
        books.splice(bookIdx, 1);
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
    res.status(200).redirect('/books');
})

// Update
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId)
    console.log(bookIndex)
    if (bookIndex !== -1) {
        for (const key in req.body) {
            books[bookIndex][key] = req.body[key];
        }
        res.status(200).redirect('/books')
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' })
    }
})

// Create
app.post('/books', (req, res) => {
    const newBook = { 
        id: books.length + 1,
        title: req.body.title, 
        author: req.body.author,
        published: req.body.published || '',
        description: req.body.description || '',
    };
    if (newBook.title && newBook.author) {
        books.push(newBook);
        res.status(201).redirect('/books');
    } else {
        res.status(400).json({ message: 'Invalid book' });
    }
})

// Edit
app.get('/books/:id/edit', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    if (book) {
        res.render('book/edit', { title: 'Edit Book', book: book });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
})
