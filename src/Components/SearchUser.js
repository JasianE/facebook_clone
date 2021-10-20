import React, {useState} from 'react'
import findUser from '../Logic/findUser'

function SearchUser(props){
    const [searchedUser, setSearchedUser] = useState('')
    const [query, setQuery] = useState('')

    function handleChange(e){
        setQuery(e.target.value)
    }
    function updateState(){
        if(searchedUser !== 'No User Found'){
            props.change(searchedUser)
        } 
    }
    async function handleSearch(e){
        e.preventDefault()
        const result = await findUser(query).then((result) => {return result})
        setSearchedUser(result)
        updateState()
    }
    return(
        <div>
            <h1>Search User </h1>
            <input 
            type = 'text'
            value = {query}
            required
            placeholder = 'Search Users'
            onChange = {handleChange}
            />
            <button onClick = {handleSearch}>Search</button>
        </div>
    )
}

export default SearchUser