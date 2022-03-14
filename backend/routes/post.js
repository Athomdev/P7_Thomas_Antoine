const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');



router.get('/', auth, postCtrl.getAllPost);
router.post('/', auth, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
// router.put('/:id', postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deleteOnePost);
// router.post("/:id/like", auth, stuffCtrl.likeDislikeSauce)

module.exports = router;