const booksService = require("../services/bookService");

const addBook = (request, h) => {
  const bookId = booksService.addBook(request.payload);

  return h
    .response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId,
      },
    })
    .code(201);
};

const getAllBooks = (request, h) => {
  const books = booksService.getAllBooks(request.query);

  return h
    .response({
      status: "success",
      data: {
        books,
      },
    })
    .code(200);
};

const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = booksService.getBookById(bookId);

  if (!book) {
    return h
      .response({
        status: "fail",
        message: "Buku tidak ditemukan",
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      data: { book },
    })
    .code(200);
};

const updateBookById = (request, h) => {
  const { bookId } = request.params;
  const isUpdated = booksService.updateBookById(bookId, request.payload);

  if (!isUpdated) {
    return h
      .response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      message: "Buku berhasil diperbarui",
    })
    .code(200);
};

const deleteBookById = (request, h) => {
  const { bookId } = request.params;
  const isDeleted = booksService.deleteBookById(bookId);

  if (!isDeleted) {
    return h
      .response({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan",
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      message: "Buku berhasil dihapus",
    })
    .code(200);
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
