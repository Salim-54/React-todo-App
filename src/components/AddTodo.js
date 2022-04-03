import { useState } from 'react';

function AddTodo ({onCreate}) {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [complete, setComplete] = useState(false);

    const addTask = (e) => {
        e.preventDefault();
        if(!task || !description) {
            alert('Fill the form please!!😎');
            return
        }
        onCreate({task, description, complete})
        setTask('')
        setDescription('')
        setComplete(false)

    // console.log(data);
}
  
  return (
    <form className= 'add-todo' onSubmit={addTask}>
    <div className="todo-name form-todo">
        <label className='label' htmlFor="name">Name</label>
        <input value={task} className= 'task' type="text" name='name' placeholder = 'Enter task name!!' onChange={(e) => {setTask (e.target.value)}} />
    </div>
    <div className="todo-descriptions form-todo">
        <label className='label' htmlFor="description">Descriptions</label>
        <input value={description} className = 'explain' type="text" name ='description' placeholder = 'Enter task descriptions!!' onChange={(e) => {setDescription (e.target.value)}} />
        
    </div>
    <button type='submit' className='add-btn' onClick = {addTask} >Add Task</button>
    </form>
  )
}

export default AddTodo