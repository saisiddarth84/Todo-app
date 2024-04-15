import React, {useState} from 'react'

function Form() {
    const [todoValue, setTodoValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: '',
            todo: todoValue,
            completed: false,
        }
        setTodoValue('');
    }
  return (
    <form className='form-group custom-form' onSubmit={handleSubmit}>
    <label>Add your todo-items</label>
    <div className='input-and-btn'>
      <input type="text" className='form-control' required
        value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
      <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
    </div>
  </form> 
  )
}

export default Form