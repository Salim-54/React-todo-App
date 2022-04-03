import Task from "./Task"

function Tasks({tasks, onDelete, onComplete}) {
  return ( 
      tasks.map((task) => (
        <Task key={task.id} data={task} 
        onDelete = {onDelete}
        onComplete ={onComplete}/>
      ))
  )
}

export default Tasks