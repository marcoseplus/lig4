const MyScript = (scenery, player) => {
    
    return new Promise((resolver) => {
        // Your code here
        console.log(scenery, player);

        resolver(Math.floor(Math.random() * 8))
    })
}


export default MyScript