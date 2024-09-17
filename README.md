# Shopping_using_REST
# Web Application - Online Shopping Platform

This project is a web-based application that includes user authentication, an online shopping interface, and an admin dashboard for managing users and products. It utilizes Node.js for the backend, MySQL for the database, and HTML/CSS/JavaScript for the front end.

## Features
- **User Authentication**: Users can sign up and log in, with password encryption.
- **Admin Dashboard**: Admins can add, edit, and delete products, as well as manage user accounts.
- **Shopping Interface**: Users can browse products, add items to a shopping cart, and proceed to checkout.
- **REST API**: The front end communicates with the backend using a REST API to handle CRUD operations on products and users.
- **MySQL Database**: User and product data is stored and retrieved from a MySQL database.
- **Session Management**: User sessions are managed to maintain login status across different pages.
- **JSON Handling**: The backend sends and receives JSON messages to communicate with the frontend.
- **Encryption**: Passwords are encrypted using `bcryptjs`.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Session Management**: Express Session
- **Encryption**: bcrypt.js

**##Install dependencies:** 
npm install
**Set up the MySQL Database:**

Create a MySQL database named yourdb.
Create the necessary tables by running the following SQL scripts:
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    role ENUM('user', 'admin'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Insert the default admin user: To insert the default admin credentials (admin / admin123), run the following function in app.js:
const insertAdmin = () => {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync('admin123', salt);
    connection.query('INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)', ['admin', password, 'admin@example.com', 'admin'], (err) => {
      if (err) throw err;
      console.log('Admin user created');
    });
};
Run the application after above 
node app.js
Open your browser and go to http://localhost:3000/login to access the login page.
Use the default admin credentials to log in as an admin.
