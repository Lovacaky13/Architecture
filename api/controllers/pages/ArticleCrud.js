const Article = require("../../db/models/Article"),
      path = require('path'),
      fs = require('fs')

module.exports = {
   
    getArticle: async (req, res) => {
        const dbArticle = await Article.find({}) // Transforme ton Model (consctructeur) en Json
       
         res.render('Article', {
            dbArticle                            // Renvoyer la DB dans la page                               
         }) 
      },

    createArticle : async  (req, res) => {                 
        const dbArticle = await Article.find({})

        if (!req.file) {
            console.log('pas de req.file')
            res.redirect('/')

        } else if (req.file) {
            Article.create({
                title: req.body.title,
                image: `/assets/images/${req.file.originalname}`,
                name: req.file.originalname,
                createDate: Date.now()
    
            })
            res.redirect('back')

        } else {
            res.redirect('/')

        }
    },

    updateArticle: async (req, res) => {
        const query = await Article.find({
            _id: req.params.id
        })

        console.log(query);
        
        Article.findByIdAndUpdate( query, {
                title: req.body.title,
                createDate: Date.now(),
            },
            (err, post) => {
                if (err) console.log(err)
                else res.redirect('/')
                
            })
    },

    deleteOneArticle: async (req, res) => {
        const dbArticle = await Article.findById(req.params.id),
              query = {_id: req.params.id},
              pathImg = path.resolve("public/images/" + dbArticle.name)

              console.log(dbArticle);
              console.log(query);
              console.log(pathImg);

        Article.deleteOne( query, 
            (err) => {
                if (!err) {
                    fs.unlink( pathImg,
                        (err) => {
                          if (err) {
                            console.log(err)
                          } else {
                            console.log('File Deleted.')
                            res.redirect('/')
                          }
                        })
                } else {
                    res.send(err)
                }
            })
    },
}