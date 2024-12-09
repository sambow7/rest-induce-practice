const router = require('express').Router();
const bookCtrl = require('../controllers/book');

router.get('/books', bookCtrl.index);
router.get('/books/new', bookCtrl.newBook);
router.post('/books', bookCtrl.postBook);
router.get('/books/:id', bookCtrl.showBook);
router.get('/books/:id/edit', bookCtrl.editBook);
router.put('/books/:id', bookCtrl.updateBook);
router.delete('/books/:id', bookCtrl.deleteBook);



module.exports = router;