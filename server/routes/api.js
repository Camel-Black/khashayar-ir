var express= require('express')
var router = express.Router()
var postSchema = require("../db/schema/post")
var path = require('path')
var dashify = require('dashify')
/*
multer configuration

here we create comments with name and email and etc...
ok lets go :)

*/



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
router.post("/posts/delete",(req,res)=>{
    let id = req.body.postId
    postSchema.findById(id).deleteOne((err,result)=>{
        if(err) res.send({"success":false})
        res.send({
            "success":true,
            "result":result
        })
    })
})


//Update posts
router.post("/posts/update/:postId",(req,res)=>{
    let update = {
        title: req.body.title,
        content: req.body.content
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
router.post("/posts/new",(req,res)=>{
    let getPost ={
        title : req.body.title,
        content: req.body.content,
        author: req.body.author,
        slug: dashify(req.body.title),
        timestamp: new Date().getTime()
    }


    //add to db
    var newPost = new postSchema(getPost)
    newPost.save((err,result)=>{
        if(err) res.send({"success":false});
        else{
            console.log("new post added")
            res.send({"success":true , "result":result});
        }
    })
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
COMENTS SECTION

here we create comments with name and email and etc...
ok lets go :)

*/

router.post("/user/login",(res,req)=>{

})



module.exports = router