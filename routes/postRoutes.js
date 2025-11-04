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

router.route("/").get(getAllPosts).post(createPost);

router
  .route("/:id")
  .get(getPostById)
  .put(updatePost)
  .patch(patchPost)
  .delete(deletePost);

export default router;
