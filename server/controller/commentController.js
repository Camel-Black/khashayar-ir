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
        if(status){
            await post.addComment(commentId,postId,(err)=>{
                if(err) cb(err)

            }).then(()=>{
                commentSchema.update({_id: commentId},{status: true})
                cb(null,{"message":"successfully added to post"})
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
                    cb(null,{"message":"successfully added to post"})
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
    }
}