import { useState } from 'react'
import './ListForm.css';
const ListForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')

  const listTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onSaveListTitle(enteredTitle)
    setEnteredTitle('')
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-list__control">
          <label>Enter Title: </label>
          <input type="text" onChange={listTitleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-list__actions">
          <button type="submit">Add New List</button>
        </div>
      </form>
    </div>
  )
}

export default ListForm