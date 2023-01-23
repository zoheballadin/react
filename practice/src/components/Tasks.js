import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {
    
        
    return (
        <div>
            {
                tasks.map(item => {
                    
                    return (<Task key={item.id} task={item} onDelete={onDelete}/>)
                })
            }
        </div>
    )
}

export default Tasks