import React, { useEffect } from 'react'
import checkLoaded from '../Logic/checkLoaded'

function LoadingPage(props){
    useEffect(() => {
        (async function(){
            const result = await checkLoaded()
            props.loaded(result)
        })()
    })
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default LoadingPage