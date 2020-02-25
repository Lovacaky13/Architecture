const
    express = require('express'),
    app = express(),
    Handlebars = require('handlebars'),
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),          // pour requete en format json
    methodOverride = require('method-override'),
    router = express.Router(),
    mongoose = require('mongoose'),
    //keys = require('./config/keys'),
    port = 3000;
    

//mongoose

//const db = require('./config/keys.js').mongoUrl
const db = 'mongodb://localhost:27017/architecture';
mongoose.connect(db, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connecter à MongoDB Cloud'))
    .catch(err => console.log(err))

// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));



var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);



//app.use
app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));



const Router = require('./api/router')
app.use('/', Router)


app.listen(port, () => {
    console.log("le serveur tourne sur le port: " + port);
});