import { useState } from 'react'
import './ListItemForm.css'
const ListItemForm = (props) => {
  const [enteredItem, setEnteredItem] = useState('')

  const itemChangeHandler = (e)=> {
    setEnteredItem(e.target.value)
  }
 
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('new item in ListItemForm', enteredItem)
    props.onSaveListItem(enteredItem)
    setEnteredItem('')
  }

  return(
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-item__control">
          <label>Enter New Item: </label>
          <input type="text" value={enteredItem} onChange={itemChangeHandler}/>
        </div>
        <div className="new-item__actions">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  )
}

export default ListItemForm