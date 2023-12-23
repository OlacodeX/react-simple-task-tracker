import { useState, useEffect } from "react"
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Home = ({showAddTask}) => {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        setTasks(data)
    }

    // Add task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
    }

    // Delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }
    // Toggle reminder status
    const toggleReminder = async (task) => {

        const updatedTask = {...task, reminder: !task.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
        })

        const data = await res.json()

        setTasks(tasks.map((mapped_task) => mapped_task.id === task.id ? {...mapped_task, reminder: data.reminder} : mapped_task))
    }

    useEffect(() => {
        fetchTasks()
    }, [])

  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks yet..."
      }
    </>
  )
}

export default Home