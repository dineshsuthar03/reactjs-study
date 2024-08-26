
import {createContext, useReducer } from react ;
import { taskReducer } from "./Taskreducer";

export const TaskContext = createContext();

export const TaskProvider = ({children})=>{
    const [tasks, dispatch] = useReducer(taskReducer, iniitalState);

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}


