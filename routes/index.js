const express = require('express');
const router = express.Router();
const Movies = require("../models/movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res,next) => {
Movies.find()
.then((peliculas)=>{
console.log(peliculas)

res.render("movies.hbs",{peliculas})

})
.then(()=> {

    console.log("los datos se importaron correctamente")
})
.catch((error)=>{

    next(error)
})

})

router.get("/movies/:id", (req,res,next)=>{

let moviesId = req.params.id

Movies.findById(moviesId)
.then((movieById)=>{
console.log(movieById)

res.render("movie-by-id",{movieById})

})
.catch((error)=>{

    next(error)
})

})







module.exports = router;
