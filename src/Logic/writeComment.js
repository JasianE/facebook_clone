async function writeComment(post, comment, user, token){
    console.log(user)
    const body = {
        user: user,
        post: post,
        comment: comment
    }
    try{
        const request = await fetch('https://poopoo123123.herokuapp.com/writeComment', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Authorization": 'Bearer ' + token},
            body: JSON.stringify(body)
        })
        const result = await request.json()
        console.log(result)
    } catch(err){
        if(err){
            return (err)
        }
    }
}

export default writeComment