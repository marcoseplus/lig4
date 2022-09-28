const MyScript = (scenery, player) => {
    
    return new Promise((resolver) => {
        // Your code here

        resolver(Math.floor(Math.random() * 8))
    }, 100)
}


export default MyScript