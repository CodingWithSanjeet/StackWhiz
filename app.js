require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');
const MongoStore = require("connect-mongo")
const connectDB = require('./server/config/db');
const session = require('express-session');
const {isActiveRoute} = require('./server/helper/routeHelper')




const app = express();
const PORT = 5000|| process.env.PORT;

// Connect to DB
connectDB()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    // cookie: {maxAge: new Date(Date.now() + (3600000))}
}))

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

app.locals.isActiveRoute = isActiveRoute;


app.use('/',require('./server/routes/blogRoutes'))
app.use('/',require('./server/routes/authRoutes'))
app.use('/',require('./server/routes/adminRoutes'))


app.listen(PORT, ()=>{
    console.log(`App Listening on PORT: ${PORT}`)
})