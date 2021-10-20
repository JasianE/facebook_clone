import React from 'react'
import Request from './Mini/Request'

function FriendSide(props){
    let i = 0;
    console.log(props.user.requests)
    return(
        <div>
            {props.user.requests.map((key) => {
                i++
                return(
                    <Request key = {i} user = {props.user} info = {key._id}/>
                )
            })
            }
        </div>
    )
}

export default FriendSide