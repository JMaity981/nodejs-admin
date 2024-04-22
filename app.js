const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const express = require('express');
const app = express();
const path = require('path');
const pageRouter = require('./routes/routes');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
const flash = require("connect-flash");
var i18n = require("i18n-express");
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodeParser);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(upload());

app.use(express.json());
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(cookieParser());

app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(flash());

app.use(express.static(__dirname + '/public'));

/* ---------for Local database connection---------- */
const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
    useNewUrlParser: true
}).then((con) => console.log("DB connection successfully..!"));
app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
    siteLangs: ["ar", "ch", "en", "fr", "gr", "it", "jp", "ru", "sp"],
    textsVarName: 'translation'
}));



// Define All Route 
pageRouter(app);

app.all("*", function (req, res) {
    res.locals = { title: "Error 404" };
    res.render("auth/auth-404", { layout: "layouts/layout-without-nav" });
});


const http = require("http").createServer(app);
http.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));