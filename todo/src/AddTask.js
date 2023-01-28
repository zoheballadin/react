import { useState } from "react"

export const AddTask = ({onAdd, showAddTask}) => {


    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    const onSubmit=(e) =>{
        e.preventDefault();
        onAdd({text,day,reminder})
        setText("")
        setDay("")
        setReminder(false)
    }
  return (
    <div>
        
        <form className="form"action="" onSubmit={onSubmit}>
            <input value={text} type="text" onChange={(e)=>setText(e.target.value)} placeholder="Enter a Task" />
            <input value={day} type="text" onChange={(e)=>setDay(e.target.value)} placeholder="Enter a date" />
            <label htmlFor="reminder">Reminder</label>
            <input value={reminder} type="checkbox" name="reminder" id="checkbox" onChange={(e)=>setReminder(e.currentTarget.checked)} checked={reminder}/>
            <input className="submit" type="submit" value="Add task" />
        </form>
    </div>
  )
}
