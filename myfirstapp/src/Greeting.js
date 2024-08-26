function Greeting(props){
    const isLoggedIn = true;
    

    // if(isLoggedIn){
    //     return <h1>hello users</h1>

    // }else{
    //     return <h1>Please login to view content</h1>
    // }
    return (
        <div>

            {isLoggedIn? <h1>Hello {props.username}</h1> : <h1>Please login to view content</h1>}
            <p>This is a simple react component</p>
        </div>
    )
}


export default Greeting;