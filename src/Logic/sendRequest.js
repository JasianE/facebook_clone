async function sendRequest(user, friend){
    const friendUser = {
        user: user,
        friend: friend
    }
    try{
        const request = await fetch('https://poopoo123123.herokuapp.com/send', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(friendUser)
            })
        const request2 = await request.json()
        return request2
    }
    catch(err){
        return err
    }
}

export default sendRequest