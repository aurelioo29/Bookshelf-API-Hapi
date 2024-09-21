const booksHandler = require("../handlers/bookHandler");

const booksRoutes = [
  {
    method: "POST",
    path: "/books",
    handler: booksHandler.addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: booksHandler.getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: booksHandler.getBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: booksHandler.updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: booksHandler.deleteBookById,
  },
];

module.exports = booksRoutes;
