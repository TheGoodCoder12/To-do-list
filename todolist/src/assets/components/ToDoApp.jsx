import React from 'react'
import { useState,useEffect } from 'react';

const ToDoApp = () => {
    const [task, setTask] = useState("");
    const [tasksArray, setTasksArray] = useState([])
    
    useEffect(() => {
        const storedTasks=JSON.parse(localStorage.getItem("tasks"))
        if(storedTasks) setTasksArray(storedTasks);
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasksArray))
    }, [tasksArray])
    


    function handleAdd(event) {
        setTasksArray([...tasksArray, { task, isCompleted: false }])
    }
    function handleEdit() {

    }
    function handleDelete() {

    }
    function handleChange(e) {
        setTask(e.target.value)
    }
    function handleCheckBox(index) {
        setTasksArray(tasksArray.map((task, i) =>
            i === index ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    }

    return (
        <div className='bg-violet-500 w-2/3 my-auto h-screen flex flex-col gap-10' >
            <div className='text-5xl italic  text-white justify-center flex flex-col items-center mt-20 '>Today's tasks</div>
            <div className="todo flex justify-between items-center border rounded-3xl bg-violet-300 p-6 h-3 mx-10 text-wrap cursor-pointer transition-all duration-200 ">
                <input className='w-full m-2 focus:outline-none' placeholder='Add a task...' type="text" onChange={handleChange} />
                <button className='bg-gray-200 rounded-md p-1.5 cursor-pointer hover:scale-105' onClick={handleAdd}>Add</button>
            </div>
            <div className='text-white text-2xl mx-10  italic underline'><span>
                Your tasks</span></div>
            <div className="todos flex flex-col gap-5">
                {tasksArray.map((item, index) => (
                    <div key={index} className='border rounded-3xl bg-violet-300 border-none mx-10 text-wrap transition-all duration-200 flex justify-center items-center'>
                        <input type="checkbox" className='rounded-full' checked={item.isCompleted} onChange={() => handleCheckBox(index)} />
                        <div className={`todo text-justify w-4/5 p-2 mr-10 ${item.isCompleted ? "line-through" : ""}`}>
                            {item.task}
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='p-2 hover:scale-105 cursor-pointer rounded-md border-none bg-white text-black m-2 w-20' onClick={handleEdit}>Edit</button>
                            <button className='p-2 hover:scale-105 cursor-pointer rounded-md border-none bg-white text-black m-2 w-20' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                ))}



                {/* <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div> */}
            </div>
        </div>
    )
}

export default ToDoApp
