async function signUp(user){
    try{
        const correctInfo = await fetch('https://glacial-tor-90347.herokuapp.com/sign-up', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        console.log(correctInfo)
        const correctInfo2 = correctInfo.json()
        return correctInfo2
    } catch(err){
        return('Heroku Suck')
    }
    
}

export default signUp