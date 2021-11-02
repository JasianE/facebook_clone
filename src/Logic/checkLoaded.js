//Calls /
//If receives data set loaded to true

async function checkLoaded(){
    try{
        const result = await fetch('https://poopoo123123.herokuapp.com/', {mode: 'cors'})
        const data = await result.json()
        return data
    } catch(err){
        return err
    }
}

export default checkLoaded