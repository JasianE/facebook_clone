//Finds everyone

async function findEveryone(){
    try{
        const everyone = await fetch('https://poopoo123123.herokuapp.com/everyone', {mode: 'cors'})
        const data = await everyone.json()
        return data
    } catch(err){

    }
}

export default findEveryone