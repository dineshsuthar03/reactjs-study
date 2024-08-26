import ChildComponent from './ChildComponent';


function ParentComponent(){
    return(
        <div>
            This is parent Component
            <h1>
                <ChildComponent />
            </h1>
        </div>
    )
}


export default ParentComponent;






// import ChildComponent from './ChildComponent';


// function ParentComponent(props){
//     return(
//         <div>
//             This is parent Component
//             <h1>
//                 <ChildComponent user= {props.user} />
//             </h1>
//         </div>
//     )
// }


// export default ParentComponent;