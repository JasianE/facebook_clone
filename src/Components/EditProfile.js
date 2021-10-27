import React from 'react'

function EditProfile(props){
    return(
        <div>
            <h1>{props.user.username}</h1>
            <h2>{props.user.firstname} {props.user.lastname}</h2>
            <h2>{props.user.email}</h2>
        </div>
    )
}
export default EditProfile