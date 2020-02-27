const Article = require("../../db/models/Article")


module.exports = {
    getArticle: async (req, res) => {
        const dbArticle = await Article.find({}) // Transforme ton Model (consctructeur) en Json
       
         res.render('index', {
            //layout: 'admin',
            dbArticle                            // Renvoyer la DB dans la page                               
         }) 
      }
}

