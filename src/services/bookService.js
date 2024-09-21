const { nanoid } = require("nanoid");

// Simulated database
const books = [];

const addBook = (payload) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = readPage === pageCount;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);
  return id;
};

const getAllBooks = ({ reading, finished, name }) => {
  let filteredBooks = books;

  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter(
      (book) => book.reading === (reading === "true")
    );
  }

  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === (finished === "true")
    );
  }

  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));
};

const getBookById = (id) => books.find((book) => book.id === id);

const updateBookById = (id, payload) => {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return false;
  }

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = payload;

  const updatedAt = new Date().toISOString();
  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: readPage === pageCount,
    updatedAt,
  };

  return true;
};

const deleteBookById = (id) => {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return false;
  }

  books.splice(index, 1);
  return true;
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
