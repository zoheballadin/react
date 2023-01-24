import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
    
        
    return (
        <div>
            {
                tasks.map(item => {
                    
                    return (<Task key={item.id} task={item} onToggle={onToggle} onDelete={onDelete}/>)
                })
            }
        </div>
    )
}

export default Tasks