import { useContext } from 'react';
import { userContext } from './userContext';

function ChildComponent(){

    const user = useContext(userContext);

    return (
        <div>
            <h1>Hello from Child Component</h1>
            <p>Name : {user.name}</p>
            <p>Name : {user.age}</p>
        </div>
    )

}

export default ChildComponent;








// function ChildComponent(props){

//     return (
//         <div>
//             <h1>Hello from Child Component</h1>
//             <p>Name : {props.user.name}</p>
//             <p>Name : {props.user.age}</p>
//         </div>
//     )

// }

// export default ChildComponent;