import React from 'react'

const ToDoApp = () => {
    return (
        <div className='bg-violet-500 w-2/3 my-auto h-screen flex flex-col gap-20' >
            <div className='text-5xl italic  text-white justify-center flex flex-col items-center mt-20 '>Today's tasks</div>
            <div className="todo flex justify-between items-center border rounded-3xl bg-violet-300 p-6 h-3 mx-10 text-wrap cursor-pointer transition-all duration-200 ">
                <span>Add a task</span>
                <button className='bg-gray-200 rounded-md p-1.5 cursor-pointer hover:scale-105'>Add</button>
            </div>
            <div className="todos flex flex-col gap-5 overflow-y-scroll">
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
                <div className="todo border rounded-3xl bg-violet-300 p-2 mx-10 text-wrap cursor-pointer hover:scale-105 transition-all duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus maxime possimus repudiandae nihil omnis mollitia porro velit fugit, delectus asperiores pariatur natus?</div>
            </div>
        </div>
    )
}

export default ToDoApp
