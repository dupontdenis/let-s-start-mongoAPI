# Express REST API - Learning Project

A complete REST API built with Express.js and MongoDB to learn CRUD operations.

## 🎯 Learning Objectives

- Understand REST API principles
- Learn HTTP methods: GET, POST, PUT, PATCH, DELETE
- Work with Express.js and MVC pattern
- Connect to MongoDB
- Use the Fetch API to interact with the API

## 📁 Project Structure

```
📁 let's start mongoAPI/
├── 📁 config/
│   └── database.js          # MongoDB connection
├── 📁 controllers/
│   └── postController.js    # Business logic
├── 📁 models/
│   └── Post.js              # Database schema
├── 📁 routes/
│   └── postRoutes.js        # Route definitions
├── server.js                # Main app
├── .env                     # Environment variables
└── package.json
```

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Make sure MongoDB is running on your local machine

3. Update `.env` file with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017
DB_NAME=my_blog
PORT=3000
```

4. Start the server:

```bash
npm start
```

Or use watch mode for development:

```bash
npm run dev
```

## 🛠️ API Endpoints

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| GET    | `/api/posts`     | Get all posts                  |
| GET    | `/api/posts/:id` | Get a single post by ID        |
| POST   | `/api/posts`     | Create a new post              |
| PUT    | `/api/posts/:id` | Update a post (full update)    |
| PATCH  | `/api/posts/:id` | Update a post (partial update) |
| DELETE | `/api/posts/:id` | Delete a post                  |

## 📝 Post Object Structure

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My Post Title"
}
```

## 🧪 Testing with Fetch API

### GET all posts

```javascript
const response = await fetch("http://localhost:3000/api/posts");
const data = await response.json();
console.log(data);
```

### GET single post

```javascript
const response = await fetch("http://localhost:3000/api/posts/POST_ID");
const data = await response.json();
console.log(data);
```

### POST - Create a new post

```javascript
const response = await fetch("http://localhost:3000/api/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My New Post",
  }),
});
const data = await response.json();
console.log(data);
```

### PUT - Update a post (full)

```javascript
const response = await fetch("http://localhost:3000/api/posts/POST_ID", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Updated Title",
  }),
});
const data = await response.json();
console.log(data);
```

### PATCH - Update a post (partial)

```javascript
const response = await fetch("http://localhost:3000/api/posts/POST_ID", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Partially Updated Title",
  }),
});
const data = await response.json();
console.log(data);
```

### DELETE - Delete a post

```javascript
const response = await fetch("http://localhost:3000/api/posts/POST_ID", {
  method: "DELETE",
});
const data = await response.json();
console.log(data);
```

## 🔍 Understanding REST & HTTP Methods

- **GET**: Retrieve data (Read)
- **POST**: Create new data (Create)
- **PUT**: Update entire resource (Update - full)
- **PATCH**: Update part of resource (Update - partial)
- **DELETE**: Remove data (Delete)

## 💡 Tips

1. Use the browser console or a separate HTML file to test fetch requests
2. Check the `test-api.http` file for quick testing with REST Client extension
3. Always check the server console for logs
4. MongoDB must be running before starting the server

## 📚 Next Steps

1. Add more fields to the Post model
2. Add authentication
3. Add pagination for GET requests
4. Add search and filtering
5. Add validation middleware
6. Create a frontend to interact with the API
