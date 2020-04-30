const post = require('../db/schema/post')

module.exports = {
    addComment: async function(commentId,postId,cb){
        try {
            console.log(`-----------postcon----- commnet_id : ${commentId} \n post_id : ${postId} \n -----------postcon-----`)
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
    },
    deleteByCategorie:async function(category,cb){
        await post.deleteMany({category : category})
        .then(data=>{
            cb(null,data)
        })
        .catch(err=>{
            cb(err)
        })
    }
}