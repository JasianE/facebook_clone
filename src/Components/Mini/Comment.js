import React from 'react'

function Comment(props){
    return(
        <div>
            <h1>{` ${props.text.sender}: ${props.text.message}`}</h1>
        </div>
    )
}

export default Comment