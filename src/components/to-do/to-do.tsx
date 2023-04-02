import { ToDoType } from '../../models';

interface IProps {
    handleTogle: any;
    handleChange: any;
    handleSubmit: any;
    toDo: string;
    toDoList: ToDoType[];
}

const ToDo = (props: IProps) => {
    return (
        <div>
            <div className='w-full flex flex-col mt-10 items-center gap-2'>
                <h1 className='mb-3 text-3xl font-bold'>Add To-Do</h1>
                <input value={props.toDo} type="text" onKeyDown={props.handleSubmit} onChange={props.handleChange} placeholder='add new to-do'
                    className='border-solid border-2 border-sky-500 w-2/5 mb-3 rounded h-9 p-1' />
                <ul className='w-2/5'>
                    {props.toDoList.map((items) => (
                        <li key={items.id} style={{ textDecoration: items.done ? "line-through" : "none" }} onClick={() => props.handleTogle(items.id)}
                            className='border-solid border-2 border-sky-500 w-full rounded bg-sky-500 text-white px-2 py-1 list-none mb-2'>
                            {items.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo