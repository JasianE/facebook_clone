async function writePost(user, post){
    const body = {
        user: user,
        post: post
    }
    try{
        const result = await fetch('https://poopoo123123.herokuapp.com/write', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        const resultGood = await result.json()
        return resultGood
    } catch(err){
        return('Heroku Suck')
    }
}

export default writePost