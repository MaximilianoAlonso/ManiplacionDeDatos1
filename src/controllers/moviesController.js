const db = require("../database/models")

module.exports = {
    list : (req,res) => {
// llamamos a  db donde estan los modelos y a Movie que es el modelo correspondiente.
//findAll trae todas las peliculas
    db.Movie.findAll()
    .then(movies => {
      return res.render("moviesList",{
            movies
        }) 
    })
.catch(error => console.log(error))     
    },

    detail: (req,res) => {
        //findByPk trae una pelicula de acuerdo al parametro que le pase... en este caso requeri el parametro del id
        db.Movie.findByPk(req.params.id)
        .then(movie => {
          return res.render("moviesDetail",{
                movie
            }) 
            
        })
    .catch(error => console.log(error))
            
        },
        news: (req,res) => {
            db.Movie.findAll({
                //devuelve todas las peliculas ordenas por fecha desde la mas nueva
                order: [
                    ["release_date", "DESC"]
                ]
            })
            .then(movies => {
              return res.render("newestMovies",{
                    movies
                }) 
            })
        .catch(error => console.log(error))     
            },

    recomended: (req,res) =>{
        db.Movie.findAll({
            //devuelve todas las peliculas ordenas por fecha desde la mas nueva
            order: [
                ["release_date", "DESC"]
            ],
            limit : 10
        },
            )
        .then(movies => {
          return res.render("recommendedMovies",{
                movies
            }) 
        })
    .catch(error => console.log(error))     
        },
    }     
        
    
    