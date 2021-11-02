async function writePost(user, post, token){
    const body = {
        user: user,
        post: post
    }
    try{
        const result = await fetch('https://poopoo123123.herokuapp.com/write', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Authorization": 'Bearer ' + token},
            body: JSON.stringify(body)
        })
        const resultGood = await result.json()
        return resultGood
    } catch(err){
        return('Heroku Suck')
    }
}

export default writePost