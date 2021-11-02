import React from 'react'

function Nav(props){
    function reset(e){
        e.preventDefault()
        props.reset('poo')
    }
    return(
        <nav>
            <h1>HEllo</h1>
            <button onClick = {reset}>Log Out</button>
        </nav>
    )
}

export default Nav