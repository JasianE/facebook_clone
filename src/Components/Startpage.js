import React, {useState} from 'react'
import signIn from '../Logic/signIn'
import LoadingPage from './LoadingPage'
import SignUpForm from './Mini/SignUpForm'
import './general.css'

function StartPage(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [signUp, setSignUp] = useState(false)

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
    function settLoaded(){
        setLoaded(true)
    }
    function ok(e){
        if(e === false){
            setSignUp(e)
        } else {
            setSignUp(true)
        }
    }
    return(
        <div>
            {loaded ? signUp ? <SignUpForm e = {ok}/> :
            <div className = 'start background'>
                <nav className = 'start Nav'>
                    <h1 className = 'Title'>Poopbook.</h1>
                </nav>
                    <div className = 'userActions'>
                        <h1 className = 'log'>Log In To Poopbook</h1>
                        <form className = 'flexForm'>
                            <h2 className = 'Text'>Username</h2>
                            <input 
                            type = 'text'
                            required
                            name = 'username'
                            value = {username}
                            onChange = {handleChange}
                            className = 'form start1'
                            placeholder = 'Username'
                            />
                            <h2 className = 'Text'>Password</h2>
                            <input 
                            type = 'password'
                            required
                            name = 'password'
                            value = {password}
                            onChange = {handleChange}
                            className = 'form start1'
                            placeholder = 'Password'
                            />
                            <button className = 'logInButt'onClick = {handleSubmit}>Log In</button>
                        </form>
                    </div> 
                    <h1 className = 'signUp' onClick = {ok}>Sign Up </h1>
            </div>: <LoadingPage loaded = {settLoaded}/>
            }
        </div>
    )
}

export default StartPage