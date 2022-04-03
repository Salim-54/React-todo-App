function Task({data, onDelete, onComplete}) {

  return (
    <div className="row">
        <div className= {`data ${data.complete ? 'completed-task' : '' }`}>
            <h1 className="task-title">{data.task}</h1>
            <p className="task-mean">{data.description}</p>
        </div>
        <div className="buttons">
            <button className={`complete ${data.complete ? 'completed' : '' }`}
            onClick={() => {
                onComplete(data.id)
            }}
            >Complete</button>
            <button className="delete" onClick={() =>{
                onDelete(data.id)}
                }>Delete</button>
        </div>
    </div>
  )
}

export default Task