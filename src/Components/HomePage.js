import React, {useState} from 'react'
import Nav from './Nav'
import FriendSide from './FriendSide'
import SearchUser from './SearchUser'
import UserPage from './UserPage'
import MakeAPost from './MakeAPost'
import Timeline from './Timeline'
import EditProfile from './EditProfile'
import Index from './Index'

function HomePage(props){
    const [searchedUser, setSearchedUser] = useState('')
    const [editProfile, setEditProfile] = useState(false)
    const [index, setIndex] = useState(false)
    const user = props.info

    function change(e){
        setSearchedUser(e)
    }
    function editProfileTime(e){
        setEditProfile(e)
    }
    function indexTime(e){
        setIndex(e)
    }
    return(
        <div>
            <Nav reset = {props.change}/>
            {searchedUser ? <UserPage friend = {searchedUser} user = {user}/> : 
            editProfile ? <EditProfile user = {user} goBack = {editProfileTime}/> : index ? 
            <Index user = {user} goBack = {indexTime}/> : 
            <div>
                <h1>{user.username}</h1>
                <h2>{searchedUser.username}</h2>
                <button onClick = {() => {editProfileTime(true)}}>Edit Profile</button>
                <button onClick = {() => {indexTime(true)}}>Index</button>
                <div className = 'center'>
                    <MakeAPost user = {user} token = {props.token}/>
                    <Timeline  user = {user} token = {props.token}/>
                </div>
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