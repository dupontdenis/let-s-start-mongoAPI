import { Post } from "../models/Post.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { title } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({
        success: false,
        error: "Title is required",
      });
    }

    const post = new Post({ title });
    await post.save();

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Update a post (PUT - full update)
export const updatePost = async (req, res) => {
  try {
    const { title } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({
        success: false,
        error: "Title is required",
      });
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }

    res.json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Partial update (PATCH)
export const patchPost = async (req, res) => {
  try {
    const updates = req.body;

    const post = await Post.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }

    res.json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }

    res.json({
      success: true,
      message: "Post deleted successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
