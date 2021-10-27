async function findPosts(friends, user){
    try{
        const data = await fetch(`https://poopoo123123.herokuapp.com/${friends}/${JSON.stringify(user.posts)}/findPosts`)
        const dataRef = await data.json()
        return dataRef
    } catch(err){
        return err
    }
}

export default findPosts