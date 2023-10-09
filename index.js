// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const userData = await response.json()
        const fetchedData = userData.map((user)  => {
            return {
                Name: user.name,
                Username: user.username,
                Email: user.email,
                Address: user.address,
                Phone: user.phone,
                Website: user.website,
                Company: user.company
            }
        })
        console.log(fetchedData) 
    }       
 catch (err) {
    console.log(err)
    } finally {
        console.log 
    }
} 
fetchUserData();