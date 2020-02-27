 // 
 /**
  * Controller d'enregistrement des utilisateurs
  * 
  */
 const User = require('../db/models/User'),
       path = require('path'),
       fs = require('fs')

 module.exports = {
     userCreate: (req, res) => {
         const coucou = 'coucou'

         console.log('test register user')

         console.log(req.body)

         res.json({
            cc: coucou
         })


         //  User.create(

         //      ...req.body, (error, User) => {

         //          if (error) { //si erreur de type pas de nom, ou mot de passe...

         //              const registerError = Object.keys(error.errors).map(key => error.errors[key].message);

         //              req.flash('registerError', registerError)
         //              req.flash('data', req.body) //recupere les données saisies par l'utilisateur

         //              return res.redirect('index', {
         //                 success: req.flash('success')
         //              }) //redirige vers ...
         //          }

         //         //  res.redirect('/')
         //      }
         //  )
     }
 }