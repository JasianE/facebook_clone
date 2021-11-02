import React, {useState} from 'react'
import signUp from '../../Logic/signUp'

function SignUpForm(props){
    const [waiting, setWaiting] = useState('')
    const [username, setUserName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e){
        const {name, value} = e.target
        switch(name){
            case 'username':
                setUserName(value)
                break
            case 'first':
                setFirstName(value)
                break
            case 'last':
                setLastName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'pass':
                setPassword(value)
                break
            default:
                console.log('switched')
        }
    }
    function reset(){
        setFirstName('')
        setLastName('')
        setPassword('')
        setUserName('')
        setEmail('')
    }
    function cancel(){
        props.e(false)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            firstname: firstname,
            email: email,
            lastname: lastname,
            password: password
        }
        reset()
        setWaiting('yes')
        signUp(user).then((result) => {
            console.log(result)
            if(result === 'Good'){
                setWaiting('')
                alert('User Created')
            } else {
                setWaiting('')
                alert('Error Occured, User Not Created')
            }
        })
        props.e(false)

    }
    return(
        <div className = 'container'>
            {waiting ? <h1>Waiting...</h1> :
            <form className = 'bubble'>
                <h2 className = 'Text'>Username</h2>
                <input 
                type = 'text'
                name = 'username'
                value = {username}
                onChange = {handleChange}
                className = 'form start1'
                required
                />
                <h2 className = 'Text'>Firstname</h2>
                <input 
                type = 'text'
                name = 'first'
                value = {firstname}
                onChange = {handleChange}
                required
                className = 'form start1'
                />
                <h2 className = 'Text'>Lastname</h2>
                <input 
                name = 'last'
                type = 'text'
                value = {lastname}
                onChange = {handleChange}
                className = 'form start1'
                required
                />
                <h2 className = 'Text'>Email</h2>
                <input 
                name = 'email'
                type = 'email'
                value = {email}
                onChange = {handleChange}
                className = 'form start1'
                required
                />
                <h2 className = 'Text'>Password</h2>
                <input 
                name = 'pass'
                type = 'password'
                value = {password}
                onChange = {handleChange}
                className = 'form start1'
                required
                />
                <button className = 'logInButt2' onClick = {handleSubmit}>Create User</button>
                <button className = 'logInButt2' onClick = {cancel}>Cancel</button>
            </form>
            }
        </div>
    )
}

export default SignUpForm