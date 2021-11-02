import React from 'react'

function EditProfile(props){
    function goBack(e){
        e.preventDefault()
        props.goBack(false)
    }
    return(
        <div>
            <button onClick = {goBack}>Home Page</button>
            <h1>{props.user.username}</h1>
            <h2>{props.user.firstname} {props.user.lastname}</h2>
            <h2>{props.user.email}</h2>
        </div>
    )
}
export default EditProfile