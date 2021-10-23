import React, {useState, useEffect} from 'react'
import checkRequests from '../Logic/checkRequests'
import sendRequest from '../Logic/sendRequest'

function UserPage(props){
    const [requested, setRequested] = useState('')

    useEffect(() => {
        (async function(){
            const response = await checkRequests(props.user, props.friend).then(result => result)
            console.log(response)
            setRequested(response)
        })()
    }, [])
    async function handleSubmit(e){
        e.preventDefault()
        setRequested('Bad')
        const result = await sendRequest(props.user, props.friend).then((result) => {return result})
        alert(result)
    }
    return(
        <div>
            <h1>{props.friend.username}</h1>
            <h2>{`${props.friend.firstname} ${props.friend.lastname}`}</h2>
            {requested === 'Good' ? <button onClick = {handleSubmit}>Send Request</button> : requested === 'b' ? <h2>Pending...</h2> : null /*Add Unfriend */
            }
        </div>
    )
}

export default UserPage