async function findUser(e, code){
    try{
        if(code === 'esam'){
            const user = await fetch(`https://glacial-tor-90347.herokuapp.com/${e}/stupid`)
            const data = user.json()
            return data
        } else {
            const user = await fetch(`https://glacial-tor-90347.herokuapp.com/${e}/find`, {mode: 'cors'})
            const data = await user.json()
            return data
        }
    } catch(err){
        if(err){
            return ('Error')
        }
    }
}

export default findUser