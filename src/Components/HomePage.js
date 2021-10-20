import React, {useState} from 'react'
import Nav from './Nav'
import FriendSide from './FriendSide'
import SearchUser from './SearchUser'
import UserPage from './UserPage'

function HomePage(props){
    const [searchedUser, setSearchedUser] = useState('')
    const [reset, setReset] = useState('')
    const user = props.info

    function change(e){
        setSearchedUser(e)
    }
    function resset(e){

    }
    return(
        <div>
            {searchedUser ? <UserPage friend = {searchedUser} user = {user}/> : <div>
                <Nav />
                <h1>{user.username}</h1>
                <h2>{searchedUser.username}</h2>
                <aside>
                    <FriendSide user = {user}/>
                    <SearchUser change = {change}/>
                </aside>
            </div>
            }
        </div>
    )
}

export default HomePage