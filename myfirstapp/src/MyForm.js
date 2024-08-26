

function MyForm(){

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Form submitted");

    };

    const handleChange = (event) =>{
        console.log(event.target.value);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="name" placeholder="Enter your name" required/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default MyForm;