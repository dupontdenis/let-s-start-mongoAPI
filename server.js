import express from "express";
import dotenv from "dotenv";
import { connectMongo } from "./config/database.js";
import postRoutes from "./routes/postRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Connect to MongoDB
try {
  await connectMongo(process.env.MONGODB_URI, process.env.DB_NAME);
  console.log("✅ Connected to MongoDB");
} catch (err) {
  console.error("❌ Failed to connect to MongoDB:", err);
  process.exit(1);
}

// ============================================
// ROUTES
// ============================================

// API Routes
app.use("/api/posts", postRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Blog REST API",
    endpoints: {
      "GET /api/posts": "Get all posts",
      "GET /api/posts/:id": "Get a single post",
      "POST /api/posts": "Create a new post",
      "PUT /api/posts/:id": "Update a post (full)",
      "PATCH /api/posts/:id": "Update a post (partial)",
      "DELETE /api/posts/:id": "Delete a post",
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API documentation: http://localhost:${PORT}`);
});
