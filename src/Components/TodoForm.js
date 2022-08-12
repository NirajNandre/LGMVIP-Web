import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props){
    const [input, setinput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setinput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })

        setinput('');

    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input'
                   onChange={handleChange}
                   ref={inputRef}/>
            <button className='todo-button'>ADD</button>
        </form>
    )
}

export default TodoForm;