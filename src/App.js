import {useState, useEffect } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Tasks from './components/Tasks';
import Task from './components/Task';

function App() {

const [tasks, setTasks] = useState([])
useEffect(() => {
  const getTasks = async () => {
    const serverTasks = await fetchTasks()
    setTasks(serverTasks)
  }
  getTasks();
},[])

//FETCHING TASKS


const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks")
  const result = await res.json();
  console.log(result);
  return result
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const result = await res.json();
  console.log(result);
  return result
}




const createTask = async (task) =>{
  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTodo = {id, ...task}
  // console.log(id, 'I created a task', task);
  // setTasks([...tasks, newTodo])

  const res =   await fetch(`http://localhost:5000/tasks`,{
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task)
  })
  const result = await res.json()
  setTasks([...tasks, result])

}

// const completeTask = (id) =>{
//   console.log('I completed', id);
//   setTasks(tasks.map((data) => data.id === id ? {...data , complete: !data.complete } : data))
// }


const completeTask = async (id) =>{

  const completedTask = await fetchTask(id)
  const updatedTask = { ...completeTask, complete: !completedTask.complete }
  console.log('I completed', id);

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })
  const result = await res.json()
  setTasks(tasks.map((data) => data.id === id ? { ...data, complete: result.complete } : data))

}

const deleteTask =async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  })

  setTasks(tasks.filter((data) => data.id !== id ))
  console.log('I deleted', id);
}
  return (
    <div>
      <Header />
      <AddTodo onCreate = {createTask} />
      {
      tasks.length > 0 ? <Tasks tasks ={tasks} 
      onDelete = {deleteTask} 
      onComplete = {completeTask}
      onCreate = {createTask}
      /> : <h1 className='NoTodo'>Currently you have no tasks!</h1>
      }
    </div>
  );
}

export default App;

// delete a task
