function checkLiked(post, user){
    for(let i = 0; i < post.likers.length; i++){
        if(post.likers[i].toString() === user._id.toString()){
            return 'liked'
        }
    }
}
export default(checkLiked)