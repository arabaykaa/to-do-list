import React, { ChangeEvent, useEffect, useState } from 'react'
import { ToDoType } from '../../models';
import ToDo from './to-do';

const ToDoLogic = () => {
    const [toDo, setToDo] = useState<string>('');
    const [toDoList, setToDoList] = useState<ToDoType[]>([]);

    const handleCHange = (e: ChangeEvent<HTMLInputElement>) => {
        setToDo(e.currentTarget.value);
    }

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (toDo.length > 2 && event.key === "Enter") {
            const newToDo: ToDoType = { id: Date.now(), done: false, text: toDo };
            setToDoList([...toDoList, newToDo]);
            setToDo('');
        }
    }

    const handleTogle = (id: number) => {
        setToDoList(toDoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        }))
    }

    useEffect(() => {
        const storedToDoList = localStorage.getItem("todos")
        if (storedToDoList) {
            setToDoList(JSON.parse(storedToDoList))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDoList))
    }, [toDoList])

    return (
        <ToDo handleChange={handleCHange} handleTogle={handleTogle} handleSubmit={handleSubmit} toDo={toDo} toDoList={toDoList} />
    )
}

export default ToDoLogic