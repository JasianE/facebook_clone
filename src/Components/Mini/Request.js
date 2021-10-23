import React, {useState, useEffect} from 'react'
import findUser from '../../Logic/findUser'
import acceptRequest from '../../Logic/acceptRequest'

function Request(props){
    const [User, setUser] = useState('')
    const [i, setI] = useState(0)
    useEffect(() => {
        (async function(){
            const user = await findUser(props.info, 'esam').then((result) => {return result})
            setUser(user)
        })()
    }, [])
    async function handleThat(e){
        e.preventDefault()
        const result = await acceptRequest(props.user, User).then((result) => {return result})
        setI((prevSTate) => {
            return prevSTate++
        })
        props.restart(i)
    }
    return(
        <div>
            <h1>{User.username}</h1>
            <h2>{`${User.firstname} ${User.lastname}`}</h2>
            <button onClick = {handleThat}>Accept</button>
        </div>
    )
}

export default Request