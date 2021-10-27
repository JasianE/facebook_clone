import React, {useState, useEffect} from 'react'
import likePost from '../../Logic/likePost'
import unLikePost from '../../Logic/unLikePost'
import checkLiked from '../../Logic/checkLiked'
import writeComment from '../../Logic/writeComment'
import Comment from './Comment'

function Post(props){
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(props.post.likers.length)
    const [comment, setComment] = useState('')
    
    let i = 0; 
    useEffect(() => {
        const result = checkLiked(props.post, props.user)
        if(result){
            setLiked(true)
        }
    }, [])
    function like(e){
        e.preventDefault()
        likePost(props.user, 'poo', props.post)
        setLiked(true)
        setLikes(prevState => prevState + 1)
    }
    function unLike(e){
        e.preventDefault()
        unLikePost(props.user, 'poo', props.post)
        setLiked(false)
        setLikes(prevState => prevState - 1)
    }
    function writeCommente(e){
        e.preventDefault()
        writeComment(props.post, comment, props.user.username)
        setComment('')
    }
    function handleChange(e){
        setComment(e.target.value)
    }
    return(
        <div>
            <h1>Sender: {props.post.sender}</h1>
            <h2>{props.post.post}</h2>
            <h3>{likes}</h3>
            {liked ? <button onClick = {unLike}>Unlike</button> : <button onClick = {like}>Like</button> 
            }
            <div>
                <input 
                type = 'text'
                value = {comment}
                onChange = {handleChange}
                placeholder = 'Comment'
                />
                <button onClick = {writeCommente}>Write Comment</button>
            </div>
            <div>
                {props.post.comments.map((key) => {
                    i++
                    return <Comment text = {key} key = {i}/>
                })}
            </div>
        </div>
    )
}

export default Post