import React, {useState, useEffect} from 'react'
import findPosts from '../Logic/findPosts'
import sortDates from '../Logic/sortDates.js'
import Post from './Mini/Post'

/*
Queries user and friends
Searched
 */
/*
TODO
If user doesnt have friends api fails
fix that idiot
*/
function Timeline(props){
    const [posts, setPosts] = useState('')
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        (async function(){
            try{
                const posts = await findPosts(props.user.friends, props.user).then((result) => {return result})
                let newPosts = sortDates(posts)
                setPosts(newPosts)
                setLoaded(true)
            } catch(err){
                setLoaded(true)
                setPosts(false)
            }
        })()
    }, [])
    let i = 0;
    const friends = props.user.friends
    return(
        <div>
            {loaded ? posts ? posts.map((key) => {
                i++
                return (<Post post = {key} key = {i} user = {props.user}/>) 
            }) : null : null }
        </div>
    )
}

export default Timeline