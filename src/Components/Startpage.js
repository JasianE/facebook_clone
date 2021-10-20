import React, {useState} from 'react'
import signIn from '../Logic/signIn'
import SignUpForm from './Mini/SignUpForm'

function StartPage(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e){
        const name = e.target.name
        if(name === 'username'){
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    async function handleSubmit(e){
        e.preventDefault()
        const result = await signIn(username, password).then((result) => {return result})
        props.change(result)
    }
    return(
        <div>
            <nav>
                <h1>Poopbook</h1>
            </nav>
            <div>
                <form>
                    <input 
                    type = 'text'
                    required
                    name = 'username'
                    value = {username}
                    onChange = {handleChange}
                    />
                    <input 
                    type = 'password'
                    required
                    name = 'password'
                    value = {password}
                    onChange = {handleChange}
                    />
                    <button onClick = {handleSubmit}>Log In</button>
                </form>
                <SignUpForm />
            </div>
        </div>
    )
}

export default StartPage