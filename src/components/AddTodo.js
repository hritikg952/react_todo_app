import React, {useState} from 'react'

export default function AddTodo({addTodo}) {

    const [value,setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <div className="addtodo-container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e=>setValue(e.target.value)}></input>
                <button>Add</button>
            </form>
        </div>
    )
}
