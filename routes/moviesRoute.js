const express = require("express")
const router = express.Router()
const {getMovies,postMovies} = require("../controllers/moviesController")

router.get("/",getMovies)

router.post("/",postMovies)

module.exports = router