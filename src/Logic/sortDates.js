/*
Takes posts
transfers each psots date to not whatever the fuck it was before
sorts dates by time
returns 
*/
function sortDates(posts){
    const newPosts = posts.map((key) => {
        const newDate = key.date.split('T')[0]
        key.date = newDate
        return key
    })
    newPosts.sort((a,b) => {
        const d1 = new Date(a.date)
        const d2 = new Date(b.date)
        return d1 -d2
    })
    return newPosts.reverse()
}

export default sortDates