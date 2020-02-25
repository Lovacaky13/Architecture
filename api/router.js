/*
 * Import
 *********/
const express = require('express'),
      router = express.Router(),
      upload  = require('./config/multer')   // image

/* Import Controller
 *******************/
const   HomePage = require('./controllers/pages/HomePage'),
        ArticleCrud = require('./controllers/pages/ArticleCrud')

/*
 * Controllers
 *************/

//  Controller Homepage
router.route('/')
    .get(HomePage.getArticle)

// ******************* CRUD Article*********************
router.route('/Article')
    .get(ArticleCrud.getArticle)
    .post(upload.single('image'), ArticleCrud.createArticle)
   
    

router.route('/Article/:id')
    .delete(ArticleCrud.deleteOneArticle)
    .put(upload.single('image'), ArticleCrud.updateArticle)



module.exports = router