import { useState } from "react"

const AddTask = () =>{

    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)
    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Add Task"/>
                {console.log(text)}
            </div>
            <div className="form-control">
                <label htmlFor="">Day & time</label>
                <input type="text" placeholder="Add Day and Time"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" />
            </div>
            <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask