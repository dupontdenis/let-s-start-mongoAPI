import express from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// GET all posts
router.get("/", getAllPosts);

// GET single post by ID
router.get("/:id", getPostById);

// POST - Create a new post
router.post("/", createPost);

// PUT - Update a post (full update)
router.put("/:id", updatePost);

// PATCH - Partial update of a post
router.patch("/:id", patchPost);

// DELETE - Delete a post
router.delete("/:id", deletePost);

export default router;
