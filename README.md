# Bookshelf API with Hapi.js

A RESTful API for managing a bookshelf application. Built using **Hapi.js**, this project provides functionalities to add, update, view, and delete books, with unique identifiers generated using **Nanoid**.

## 🛠️ Features

- **Add Books**: Add new books to the collection.
- **View Books**: Retrieve the list of all books or search by specific criteria.
- **Update Books**: Modify book details like title, author, and summary.
- **Delete Books**: Remove books from the collection.

## 📂 Project Structure

```bash
/bookshelf-api-main
├── src/
│ ├── server.js     # Main application entry point
│ ├── routes.js     # API route definitions
│ ├── handlers.js   # Request handlers for each route
│ └── data.js       # Data storage (in-memory array)
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v14 or later
- **npm**: Node package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bookshelf-api-hapi.git
   cd bookshelf-api-hapi
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The API will run at http://localhost:5000.

## 📄 API Endpoints

### Base URL: `http://localhost:5000`

| **Method** | **Endpoint**  | **Description**              | **Request Body**             | **Response**                     |
| ---------- | ------------- | ---------------------------- | ---------------------------- | -------------------------------- |
| `GET`      | `/books`      | Retrieve all books           | N/A                          | JSON array of all books          |
| `POST`     | `/books`      | Add a new book               | `{ title, author, summary }` | `{ id, title, author, summary }` |
| `GET`      | `/books/{id}` | Retrieve a single book by ID | N/A                          | `{ id, title, author, summary }` |
| `PUT`      | `/books/{id}` | Update book details by ID    | `{ title, author, summary }` | Updated book object              |
| `DELETE`   | `/books/{id}` | Delete a book by ID          | N/A                          | `{ message: "Book deleted" }`    |

## 🌟 Technologies Used

- Hapi.js: Framework for building APIs
- Nanoid: Library for generating unique identifiers
- Nodemon: For live server reload during development

## 🤝 Contributions

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

---

Developed with ❤️ by **Aurelio**.
