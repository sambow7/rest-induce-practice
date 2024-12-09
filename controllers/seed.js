const Book = require('../models/book');
const books = require('../data/books');



async function seedData(req, res) {
  try {
    await Book.insertMany(books);
    res.status(201).send('Boooks seeeded succesfully')
  } catch (error) {
    console.errror(error, message);
    res.status(500).send('Error seeding books');
  }
}

module.exports = { seedData }