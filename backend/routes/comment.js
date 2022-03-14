const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const commentCtrl = require("../controllers/comment");

// router.get("/", commentCtrl.getAllPost);
router.post("/", auth, commentCtrl.createComment);
// router.get("/:id", commentCtrl.getOnComment);
// router.put('/:id', commentCtrl.modifyPost);
router.delete("/:id", auth, commentCtrl.deleteOneComment);
// router.post("/:id/like", auth, stuffCtrl.likeDislikeSauce)

module.exports = router;
