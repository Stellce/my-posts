const express = require("express");

const PostsController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const storageSave = require("../middleware/storage-save");

const router = express.Router();

router.post("", checkAuth, storageSave, PostsController.createPost);

router.put("/:id", checkAuth, storageSave, PostsController.updatePost);

router.get("", PostsController.getAllPosts);

router.get("/:id", PostsController.getOnePost);

router.delete("/:id", checkAuth, PostsController.deletePost);

module.exports = router;
