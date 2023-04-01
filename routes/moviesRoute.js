const express = require("express")
const router = express.Router()
const {getMovies,postMovies} = require("../controllers/moviesController")
const multer = require ("multer")

//Setting storage engine
const storageEngine = multer.diskStorage({
      destination: "./uploads",
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
      },
    });

//initializing multer
const upload = multer({
      storage: storageEngine,
    });

router.get("/",getMovies)

router.post("/",upload.single('img'),postMovies)

module.exports = router