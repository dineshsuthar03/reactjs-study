
function TaskInput(props){
    return (
        <div>
            <input type="text" placeholder="Add a task" 
            value={props.newTask}
            onChange={(e)=> props.setNewTask(e.target.value)}
            
            
            />
            <button onClick={props.handleAddTask}>Add Task</button>
        </div>
    )
}

export default TaskInput;

