import React, { useState, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { DndContext } from '@dnd-kit/core';
import { FcMultipleInputs } from "react-icons/fc";

const ToDoApp = () => {
    const [task, setTask] = useState("");
    const [tasksArray, setTasksArray] = useState([]);

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            try {
                setTasksArray(JSON.parse(storedTasks));
            } catch (error) {
                console.error("Error parsing tasks from localStorage:", error);
                setTasksArray([]); // Reset if parsing fails
            }
        } else {
            setTasksArray([]); // Initialize with an empty array if no tasks are found
        }
    }, []);

    // Save tasks to localStorage whenever tasksArray changes
    useEffect(() => {
        if (tasksArray.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasksArray));
        }
    }, [tasksArray]);

    // Log tasksArray whenever it changes
    useEffect(() => {
    }, [tasksArray]);

    // Add a new task
    const handleAdd = () => {
        const trimmedTask = task.trim();
        if (trimmedTask === "") return; // Prevent adding empty tasks
        const newTask = { task: trimmedTask, isCompleted: false };
        setTasksArray([...tasksArray, newTask]);
        setTask(""); // Clear the input field
    };

    // Edit a task
    const handleEdit = (index) => {
        const newTask = prompt("Edit your task:", tasksArray[index].task);
        if (newTask !== null) {
            const updatedTasks = tasksArray.map((t, i) =>
                i === index ? { ...t, task: newTask } : t
            );
            setTasksArray(updatedTasks);
        }
    };

    // Delete a task
    const handleDelete = (index) => {
        const updatedTasks = tasksArray.filter((_, i) => i !== index);
        setTasksArray(updatedTasks);
    };

    // Handle input change
    const handleChange = (e) => {
        setTask(e.target.value);
    };

    // Toggle task completion
    const handleCheckBox = (index) => {
        setTasksArray(tasksArray.map((t, i) =>
            i === index ? { ...t, isCompleted: !t.isCompleted } : t
        ));
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    // Dropdown logic
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Show all tasks');

    const options = [
        'Show completed tasks',
        'Show incomplete tasks',
        'Show all tasks',
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Filter tasks based on the selected option
    const filteredTasks = tasksArray.filter((t) => {
        if (selectedOption === 'Show completed tasks') return t.isCompleted;
        if (selectedOption === 'Show incomplete tasks') return !t.isCompleted;
        return true; // Show all tasks
    });

    return (
        <div className='bg-violet-500 w-2/3 my-auto h-screen flex flex-col gap-10 overflow-y-auto'>
            
            {/* Heading */}
            <div className='text-6xl font-bold italic text-white justify-center flex flex-col items-center mt-20' style={{ fontFamily: "Indie Flower" }}>
                Today's Tasks
            </div>
                
            <div className='todo flex justify-between items-center border rounded-3xl bg-violet-300 p-6 h-3 mx-10 text-wrap cursor-pointer transition-all duration-200'>
                <input
                    className='w-full m-2 focus:outline-none text-xl'
                    placeholder='Add a task...'
                    type="text"
                    value={task}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    style={{ fontFamily: "Caveat" }}
                />
                <button
                    className='bg-gray-200 rounded-md p-1.5 cursor-pointer hover:scale-105'
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>
            <div className='text-white text-2xl mx-10 italic flex justify-between underline'>
                <span className='text-3xl font-bold' style={{ fontFamily: "Indie Flower" }}>Your tasks</span>
                <span>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {selectedOption}
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {isOpen && (
                            <div
                                className="origin-top-right  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                            >
                                <div className="py-1 " role="none">
                                    {options.map((option, index) => (
                                        <button
                                            key={index}
                                            className="text-gray-700 block  w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </span>
            </div>
            <DndContext>

                <div className="flex flex-col gap-5">
                    {filteredTasks.map((item, index) => (
                        <div key={index} className='border rounded-3xl bg-violet-300 border-none mx-10 text-wrap transition-all duration-200 flex justify-center items-center'>
                            <input
                                type="checkbox"
                                className='rounded-full cursor-pointer ml-5.5'
                                checked={item.isCompleted}
                                onChange={() => handleCheckBox(index)}
                            />
                            <div className={`todo text-justify w-4/5 p-2 text-2xl mr-10 ${item.isCompleted ? "line-through" : ""}`} style={{ fontFamily: "Caveat" }}>
                                {item.task}
                            </div>
                            <div className='flex justify-center mr-2.5'>
                                {/* Subtask btn */}
                                <button
                                    className='p-2 hover:scale-105 cursor-pointer rounded-md border-none bg-white text-black m-2'
                                    onClick={() => handleExpand(index)}
                                >
                                    <FcMultipleInputs />
                                </button>
                                {/* Edit btn */}
                                <button
                                    className='p-2 hover:scale-105 cursor-pointer rounded-md border-none bg-white text-black m-2'
                                    onClick={() => handleEdit(index)}
                                >
                                    <FiEdit />
                                </button>
                                {/* Delete btn */}
                                <button
                                    className='p-2 hover:scale-105 cursor-pointer rounded-md border-none bg-white text-black m-2'
                                    onClick={() => handleDelete(index)}
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </DndContext>
        </div>
    );
};

export default ToDoApp;