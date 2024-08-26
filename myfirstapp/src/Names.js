
function Names(){

    const names  = new Array("Name1","Name2","Name3");
    return(
        <ul>
            {names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>
    )

}

export default Names;