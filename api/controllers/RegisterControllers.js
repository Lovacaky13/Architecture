 // 
/**
 * Controller d'enregistrement des utilisateurs
 * 
 */

const   User = require('../../db/models/User'),
        path = require('path');

module.exports = {

    
    post: (req, res) => {

        User.create({

            lastname: req.body.lastname,
            firstname: req.body.firstname,
            adress1: req.body. adress1,
            zip:req.body.zip,
            city:req.body.city,
            email:req.body.email,
            password: req.body.password,
            status:'user',
            isAdmin: false,
            isBan:false,
            isVerified:false,
       
        }, (error, user) => { 

            res.redirect('/')
        })

    }
}