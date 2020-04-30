const commentSchema = require('../db/schema/comments')
const post = require('./postController')

module.exports = {
    newComment: async function(comment){
        try {
            let data  = new commentSchema(comment)
            await data.save()
            .catch(err=>{
                console.log(err)
            })
            return true
        } catch (error) {
            console.log(err)
            return false
        }
    },
    commentsStatusCondition: async function(postId,commentId,status,cb){
        console.log(`-----status---- \n ${status} --- \n ${typeof(status)} ---- \n`)
        if(status){
            console.log(`-----------commentcon----- commnet_id : ${commentId} \n post_id : ${postId} \n -----------commentcon-----`)
            
            await post.addComment(commentId,postId,(err)=>{
                if(err) cb(err)

            }).then(()=>{
                commentSchema.updateOne({_id: commentId},{
                    "status": true
                }).then(data=>{
                    if(data.nModified == 1){
                        cb(null, "success")
                    }
                    else{
                        cb(`${data.nModified} the number off modified`)
                    }
                })
                
            }).catch(err=>{
                cb(err)
            })
        }
        else{
            await post.removeCommentsOfPost(commentId,postId,(err)=>{
                if(err) cb(err)
            }).then(()=>{
                commentSchema.findByIdAndDelete({commentId})
                .then(()=>{
                    cb(null,{"message":"what the hell"})
                })
            }).catch(err=>{
                cb(err)
            })
        }
    },
    findCommentsBystastus:async function(key,cb){
        await commentSchema.find({status : key},(err,docs)=>{
            if(err) cb(err)
            console.log(docs)
            cb(null,docs)
        })

    },
    findCommentById:async function(commentid,cb){
        await commentSchema.findById(commentid)
            .then(data=>{
                cb(null,data)
            })
            .catch(err=>{
                cb(err)
            })
    },
    deleteCommentById:async function(postId,commentId,cb){
        await commentSchema.findByIdAndDelete(commentId)
            .then(()=>{
                post.removeCommentsOfPost(commentId,postId,err=>{
                    if(err) cb(err)
                    else{
                        cb(null,{"message":"comment removed succesfulley"})
                    }
                })
            })
    },
    getAllByPostId:async function(postid,cb){ //for accepted comments
        await commentSchema.find({postId : postid,status: true})
        .then((data)=>{
            cb(null,data)
        })
        .catch(err=>{
            cb(err,{'message':'err happen in get all comments from single post'})
        })
    }
}