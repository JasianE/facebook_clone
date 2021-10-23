import React, {useState} from 'react'
import writePost from '../Logic/writePost'

function MakeAPost(props){
    const [postText, setPostText] = useState('')

    function handleChange(e){
        setPostText(e.target.value)
    } 
    async function handleSubmit(e){
        e.preventDefault()
        const result = await writePost(props.user, postText).then((result) => {return result})
        console.log(result)
    }

    return(
        <div>
            <input 
            type = 'text'
            placeholder = {`Whats on your mind ${props.user.username}?`}
            value = {postText}
            onChange = {handleChange}
            required
            />
            <button onClick = {handleSubmit}>Submit Post</button>
        </div>
    )
}

export default MakeAPost