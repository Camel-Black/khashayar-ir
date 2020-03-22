const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser')
var session = require('cookie-session')
var flash = require('express-flash')
var passport = require('passport')

const instialPassport = require('./db/passport-config')
instialPassport(passport, 
    (username)=>{
    return user.find({username: username})
    },
    (id)=>{
        return user.findById(id)
    }
)



//db config
mongoose.connect("mongodb://localhost:27017/khashayarir",{useUnifiedTopology: true,useNewUrlParser: true})
mongoose.connection.on("connected",(err)=>{
    if(err) throw err;

    else console.log("database connected !!")
})

//routs
var apiRouter = require('./routes/api')

//multer


//usages

app.use(cors({    
    origin: ['http://localhost:8080'],
    credentials: true
}))
app.use(bodyParser({limit: '50mb'}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api",apiRouter)
app.use(flash())
app.use(session({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 48 * 60 * 60 * 1000 // 48 hours
}))

//passport
app.use(passport.initialize())
app.use(passport.session())



//host
app.listen(3000,err=>{
    try {
        console.log("port 3000")
    } catch (err) {
        console.log(err)
    }
})

