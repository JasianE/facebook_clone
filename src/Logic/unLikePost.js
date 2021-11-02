async function unLikePost(user, friend, post, token){
    try{
        const body = {
            user: user,
            friend: friend,
            post: post
        }
        const request = await fetch('https://poopoo123123.herokuapp.com/unlike', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Authorization": 'Bearer ' + token},
            body: JSON.stringify(body)
        })
        return request
    } catch(err){
        if(err){
            return (err)
        }
    }
}

export default unLikePost