import { useState } from "react"

const AddTask = ({onAdd}) =>{

    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert("Please add a task")
            return
        }

        onAdd({text,day,reminder})

        setText("");
        setDay("");
        setReminder(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Add Task"/>
                {/* {console.log(text)} */}
            </div>
            <div className="form-control">
                <label htmlFor="">Day & time</label>
                <input value={day} onChange={(e)=>{setDay(e.target.value)}} type="text" placeholder="Add Day and Time"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} type="checkbox" checked={reminder}/>
            </div>
            <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask