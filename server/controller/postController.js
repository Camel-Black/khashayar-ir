const post = require('../db/schema/post')

module.exports = {
    addComment: async function(commentId,postId,cb){
        try {
                await post.update({_id :postId},{
                    $push:{
                        comments : commentId
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    cb(err)
                })
        } catch (error) {
            console.log(error)
            cb(error)
        }
    },
    removeCommentsOfPost: async function(commentId,postId,cb){
        await post.update({_id :postId},{
            $pull:{
                comments : commentId
            }
        })
            .catch((err)=>{
                console.log(err)
                cb(err)
            })
    }
}