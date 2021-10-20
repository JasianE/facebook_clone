//Takes in user info
//Takes in userRequesting Info
//Checks userequesting info
//if uesrinfo is in usereqeustingi nfo's request
//Then setRequested to true
//Else no

async function checkRequests(user, friend){
    try{
        const request = await fetch(`https://glacial-tor-90347.herokuapp.com/${user.username}/${friend.username}/check`, {mode: 'cors'})
        const data = await request.json()
        return data
    } catch(err){
        return err
    }
}

export default checkRequests