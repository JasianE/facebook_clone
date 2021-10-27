import React from 'react'
import sendRequest from '../../Logic/sendRequest'

function User(props){
    function send(e){
        e.preventDefault()
        sendRequest(props.user, props.friend)
    }
    return(
        <div>
            <h1>{props.friend.username}</h1>
            <h2>{props.friend.firstname} {props.friend.lastname}</h2>
            <button onClick = {send}>Send Friend Request</button>
        </div>
    )
}

export default User