import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completedTodo, deleteAll, removeTodo } from '../store/todoSlice'
import DeleteIcon from "@mui/icons-material/Delete";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const ListApp = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)

    function handleClick() {
        if (todo == "")
            return alert("You forgot something my boy")
        dispatch(addTodo(todo))
        setTodo("")
        console.log(todos);
    }

    function handleDelete(index) {
        dispatch(removeTodo(index))
    }
    let date = new Date()
    let currentDate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDay()

    return (
        <div>
            <div className="h-screen p-10">
                <div className="container mx-auto max-w-md" >
                    <h1 className="text-3xl font-bold mb-2 text-center text-blue-900">To-Do App</h1>
                    <h1 className="text-2xl mb-4 text-center text-blue-700 italic">Never forget your works anymore!</h1>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-600 rounded"
                            placeholder="Add a new task"
                            onChange={(e) => setTodo(e.target.value)}
                            value={todo.text}
                        />
                        <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleClick}>Add</button>
                    </div>
                    <ul>
                        {todos.map((todo, index) => {
                            return (
                                <li style={{ textDecoration: `${todo.completed ? "line-through" : "none"}` }} key={index} className="flex items-center p-2 border border-gray-400 mb-2 rounded relative">{todo.text}
                                    <button className="text-red-500 absolute right-2" > <DeleteIcon onClick={() => handleDelete(index)} /></button>
                                    <button className="absolute right-10" onClick={() => dispatch(completedTodo(index))}> {todo.completed ? <CloseIcon /> : <DoneIcon className="text-green-700" />}</button>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="w-full" onClick={() => dispatch(deleteAll())}>
                        <li className="flex items-center justify-center gap-2 p-2 border border-gray-400 mb-2 rounded ">{todos.length == 0 ? "You have nothing to do today " : "Clear All"}
                            {todos.length == 0 ? "🎉" : <ClearAllIcon className="text-red-500" />}
                        </li>
                    </button>

                    <span className=" absolute top-3 left-3">@{currentDate}</span>
                </div>
            </div >
        </div>
    )
}

export default ListApp