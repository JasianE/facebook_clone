import { PROPERTY_TYPES } from '@babel/types'
import React, {useState, useEffect} from 'react'
import findEveryone from '../Logic/findEveryone'
import User from './Mini/User'
/*
Maps througrh tge users
and then go thorugh a component that cna send a request
and then odne: )
 */
function Index(props){
    const [users, setUsers] = useState('')
    const [loaded, setLoaded] = useState(false)
    let i = 0;

    useEffect(() => {
        (async function(){
            const users = await findEveryone()
            setUsers(users)
            setLoaded(true)
        })()
    }, [])

    return(
        <div>
            <h1>Users</h1>
            <hr/>
            {loaded ? users.map((key) => {
                i++
                return <User friend = {key} user = {props.user} key = {i}/>
            }) : <h1>Loading...</h1>}
        </div>
    )
}

export default Index