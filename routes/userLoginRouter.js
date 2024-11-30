var express = require('express');
var router = express.Router();
const multer = require('multer');
const uc = require('../controller/usercontrollar')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/profile_images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/Signup', upload.single('profilePicture'), uc.Signup);
router.post('/Login', uc.Login);

module.exports = router;