var express = require('express');
var router = express.Router();
const multer = require('multer');
const pc= require('../controller/postcontrollar')
const am=require('../middleWare/auth')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/post_img')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})
  
  const upload = multer({ storage: storage })



router.post('/create_post',upload.single('image'),am.token_secure, pc.create_post );

module.exports = router;
