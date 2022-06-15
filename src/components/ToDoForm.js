import { useState } from 'react'
import axios from "axios";

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(userInput)
        setUserInput("")
       
        console.log(event);
        console.log(this);

        const formData = new FormData(event.target);
        // alert (`${formData.get('first_name')} ${formData.get('last_name')} ${formData.get('age')} ${formData.get('country')} ${formData.get('city')}`);
    
    
    
    
        axios.post('https://crud1-9a38a-default-rtdb.firebaseio.com/list.json', Object.fromEntries(formData.entries()));
        
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSubmit(event)
        }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                name="input"
                placeholder="Введите значение..."
            />        
            <button>+</button>
        </form>
    )
}

export default ToDoForm;