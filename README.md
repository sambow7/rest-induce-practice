# RESTful Library Management Project

This project demonstrates the implementation of a RESTful API for managing a collection of books using Express.js. It showcases a variety of technical skills, including RESTful design principles, server-side rendering with EJS, HTTP method overrides, and middleware integration. The project follows the **I.N.D.U.C.E.** (Index, New, Delete, Update, Create, Edit) methodology for RESTful routing, making it a great learning tool for understanding and practicing API development.

---

## Features

- **RESTful API**: Implements all RESTful routes for managing a book collection.
- **Server-Side Rendering**: Dynamically generates HTML using EJS templates, displaying book information and supporting interactive user input.
- **Middleware Integration**:
  - **Morgan**: Logs HTTP requests for debugging and monitoring.
  - **Express**: Handles core HTTP routing and request parsing.
  - **Method-Override**: Enables support for HTTP PUT and DELETE requests from forms.
- **Dynamic Data Management**: Supports adding, updating, and deleting books from the dataset.
- **Error Handling**: Responds gracefully when a requested book is not found.
- **Scalable Design**: Easily extendable for additional features or dataset growth.

---

## Technologies Used

### **Backend**
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Lightweight framework for creating RESTful APIs.
- **EJS**: Templating engine for dynamic HTML rendering.

### **Development Tools**
- **Morgan**: HTTP request logger for monitoring and debugging.
- **Method-Override**: Middleware for simulating HTTP methods in browsers that don’t support them.

---

## RESTful Routes Overview (I.N.D.U.C.E.)

| Route Type | HTTP Method | Endpoint               | Description                                      |
|------------|-------------|------------------------|--------------------------------------------------|
| **Index**  | `GET`       | `/books`              | Displays a list of all books in the collection. |
| **New**    | `GET`       | `/books/new`          | Displays a form to create a new book.           |
| **Create** | `POST`      | `/books`              | Adds a new book to the collection.              |
| **Show**   | `GET`       | `/books/:id`          | Displays details for a specific book.           |
| **Edit**   | `GET`       | `/books/:id/edit`     | Displays a form to edit an existing book.       |
| **Update** | `PUT`       | `/books/:id`          | Updates details for an existing book.           |
| **Delete** | `DELETE`    | `/books/:id`          | Deletes a book from the collection.             |

---

## Skills Demonstrated

### 1. **RESTful Design Principles**
- Gained proficiency in designing APIs that adhere to RESTful conventions.
- Practiced mapping HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to CRUD operations.

### 2. **Middleware Integration**
- Learned to use third-party middleware like `morgan` for request logging and `method-override` for handling form-based HTTP methods.
- Implemented built-in middleware for parsing JSON and URL-encoded payloads.

### 3. **Dynamic Rendering with EJS**
- Created reusable templates for rendering views dynamically based on data.
- Integrated logic for passing variables (e.g., book data) to EJS templates.

### 4. **Data Management**
- Developed logic to add, update, and delete items in an in-memory dataset.
- Practiced validation and error handling for user input and resource existence.

### 5. **Debugging and Error Handling**
- Used `morgan` for monitoring incoming requests and identifying issues.
- Implemented status codes and JSON responses for error handling (e.g., `404 Not Found`).

---

## Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mike-gustafson/rest-induce-practice.git
   cd rest-induce-practice
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Server**
   ```bash
   node server.js
   ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000` to interact with the application.

---

## Future Enhancements
- Connect the API to a persistent database (e.g., MongoDB, PostgreSQL) for data storage.
- Add user authentication and authorization for secure access.
- Implement client-side interactivity with JavaScript frameworks like React or Vue.js.

---

## What I Learned
Through this project, I gained a strong foundation in RESTful API development and server-side rendering. I also improved my debugging skills, middleware configuration, and understanding of dynamic data handling. This project reflects my ability to build scalable, maintainable backend solutions while adhering to industry-standard practices.