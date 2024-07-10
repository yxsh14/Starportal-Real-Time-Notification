# Real-Time Notification System

## Description
This project is a microservices-based real-time notification system built using Node.js, Express, MongoDB, RabbitMQ, WebSocket (Socket.IO), and JWT for authentication. The system allows users to register and log in, and then receive real-time notifications.

## Features
- User registration and login
- JWT-based authentication
- Real-time notifications using WebSocket (Socket.IO)
- Message queue integration with RabbitMQ
- MongoDB for data persistence

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB
- RabbitMQ
- A .env file with the following variables:
  - `PORT`
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `RABBITMQ_URL`

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/realtime-notification-system.git
    cd realtime-notification-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory with the following content:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    RABBITMQ_URL=your_rabbitmq_url
    ```

4. Start the server:
    ```sh
    npm start
    ```

### Running the Tests
You can use Postman or any other API testing tool to test the routes.

#### Register a User
- **URL:** `http://localhost:5000/api/auth/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    ```

#### Login a User
- **URL:** `http://localhost:5000/api/auth/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    ```


### Notification Routes

#### Create a Notification
- **URL:** `http://localhost:5000/api/notifications`
- **Method:** `POST`
- **Headers:**
    - `Authorization`: `Bearer <your-jwt-token>`
- **Body:**
    ```json
    {
        "message": "This is a test notification"
    }
    ```
#### Get All Notifications
- **URL:** `http://localhost:5000/api/notifications`
- **Method:** `GET`
- **Headers:**
    - `Authorization`: `Bearer <your-jwt-token>`

#### Get Notification by ID
- **URL:** `http://localhost:5000/api/notifications/:id`
- **Method:** `GET`
- **Headers:**
    - `Authorization`: `Bearer <your-jwt-token>`

#### Mark Notification as Read
- **URL:** `http://localhost:5000/api/notifications/:id`
- **Method:** `PUT`
- **Headers:**
    - `Authorization`: `Bearer <your-jwt-token>`

## Contributing

Feel free to submit issues and enhancement requests.

### Technologies Used
- Node.js
- Express.js
- MongoDB
- RabbitMQ
- Socket.IO
- JWT
- bcrypt

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
