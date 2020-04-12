
const express= require('express')
const router = express.Router()
const postSchema = require("../db/schema/post")
const userSchema  = require('../db/schema/user')
const path = require('path')
const dashify = require('dashify')
const {auth , multererr} = require('./middleware')
const categoryC = require('../controller/categoryConrtoller')
const userC = require('../controller/userController')
const moment = require('moment')
const multer = require('multer')
const categorySchema = require('../db/schema/category')


var n = 0

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"../src/assets/images/post")
    },
    filename:function (req,file,cb) {
        n = n+1
        n = n.toString()
        
        cb(null,n+'.png')
    },
    
})

const upload =  multer({
    storage: storage,
    limits:{
        fileSize: 1500000
    }
})

// router.post('/test',(req,res)=>{
//     var r = req.body
//     var t = JSON.stringify(r.delta)
//     var s = JSON.parse(t)
//     console.log(s)
//     res.status(200)
// })



/*
POSTS SECTION

here we create comments with name and email and etc...
ok lets go :)

*/

//get post
router.get("/posts/all",(req,res)=>{
    postSchema.find((err,result)=>{
        if (err) res.send({"success":false , "err": err})
        res.send({"success":true,"result":result})
    })
})
//get post by title
router.get("/posts/:post",(req,res)=>{
    let rslug = req.params.post

    postSchema.find({slug: rslug}) 

    .then(post => {
        if(post){
            res.status(200).json(post)
        }
        else{
            res.status(201).json(post)
        }
    }) 
    
    .catch(err => res.status(404).json({ success: fals})
    ); 
})

//delete Post
router.post("/posts/delete",auth,(req,res)=>{
    let id = req.body.postId
    try {
        postSchema.findById(id).deleteOne((err,result)=>{
            if(err){
                console.log("ss")
                return res.status(400).send({"success":false})
            }
            res.status(200).send({
                "success":true,
                "result":result
            })
        })
    } catch (error) {
        console.log(error)
    }
})


//Update posts
router.post("/posts/update/:postId",auth,(req,res)=>{
    let update = {
        title: req.body.title,
        content: req.body.content,slug: dashify(req.body.title)
    }
    postSchema.findByIdAndUpdate(req.params.postId,update,(err,result)=>{
        if(err) res.send({"success":false})
        res.send({
            "success":true,
            "result":result
        })
    })
})

//create new post
router.post("/posts/new",upload.single('file'),(req,res)=>{
    console.log("kosse nanae noode")
    var localTime  = moment.utc().toDate();
    localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');  
    var tms = moment(localTime).format("X");
    let img = req.file.filename
    
    let body =  JSON.parse(JSON.stringify(req.body));
    console.log(body)
    try {
        let getPost ={
            image: img,
            title :  body.title,
            content:  body.content,
            author:  body.author,
            slug: dashify(body.title),
            timestamp: tms
        } 
        console.log(getPost)
        //add to db
        var newPost = new postSchema(getPost)
        newPost.save((err,result)=>{
            if(err) console.log(err)//res.send({"success":false});
            else{
                console.log("new post added")
                res.send({"success":true , "result":result});
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({"err": error})
        
    }
})



/*
CATEGORY SECTION

here we create comments with name and email and etc...
ok lets go :)

*/

router.get('/posts/all/category',async (req,res)=>{
    
    categorySchema.find((err,result)=>{
        if (err) res.send({"success":false , "err": err})
        res.send({"success":true,"result":result})
    })
})

router.post('/posts/new/category',auth,async (req,res)=>{
    let {category} = req.body
    console.log(category)
    if(typeof category !== 'string' || category == ''){
        return res.status(400).json({'err':'Enter valid Category'})
    }
    
    else{
        var exist = await categoryC.isExist(category)
        if(exist){
            return res.status(400).json({"err":"category existed"})
        }
        else{
            
            try {
                await categoryC.addCategory(category)
                return res.status(200).json({"success":true})
            } catch (error) {
                return res.status(400).json({'err': error})
            }
        }
        
    }

    

})
router.post('/posts/delete/category', (req,res)=>{
    
    
    let {categories} = req.body
    
    try {
        let result =  categoryC.deleteCategoryById(categories)
        console.log(result)
        res.status(200)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})



/*
COMENTS SECTION

here we create comments with name and email and etc...
ok lets go :)

*/


//get all comments of a specific post
router.post("/posts/:postId/comments",(req,res)=>{

})


//add new comment to a post
router.post("/posts/:postId/newcomment",(req,res)=>{

})


//delete comment
router.post("/posts/:postId/delete/:commentId",(req,res)=>{

})


//update comment
router.post("/posts/:postId/update/:commentId",(req,res)=>{

})


/*
USER SECTION - - - - - - - - -  - - - - - 0_0

here we create comments with name and email and etc...
ok lets go :)

*/


router.post('/user/register',async (req,res)=>{
     var data = {
         email:req.body.email,
         password:req.body.password,
         username:req.body.username,
         access: (req.body.access) ? req.body.access : 1
        }

    try {
        let ix = await userC.getByUsername(data.username)
        console.log(`${ix} ix`)
        if(ix === "true"){
            console.log("s")
            return res.status(400).json({"seccess":false , "message":"Username Already Taken :/ "})
        }
        await userC.addUser(data)
       
        res.status(200).json({"success":true})

    } catch (error) {
        console.log("%c catch", "color:#FF0000")
        console.log(error)

    }
})

router.post('/user/login',async (req,res)=>{
    try {
        var {username , password } = req.body
        var user = await userC.compareUserPassword(username,password)
        if(!user){
            return res.status(401).json({error:"Who Are You?"})
        }
        var token = await userC.tokenGenerator(user)
        console.log(token)
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(400).json({"success":false, "message":"err happend on /user/login route"})
    }

})

router.get('/user/dashboard',auth,async (req,res)=>{

})
router.get('/here',(req,res)=>{
    userC.print()
    res.json({"ok":true})
})


module.exports = router