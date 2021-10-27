async function unLikePost(user, friend, post){
    try{
        const body = {
            user: user,
            friend: friend,
            post: post
        }
        const request = await fetch('https://poopoo123123.herokuapp.com/unlike', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    } catch(err){
        if(err){
            return (err)
        }
    }
}

export default unLikePost