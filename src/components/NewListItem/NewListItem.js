import ListItemForm from './ListItemForm'
import './NewListItem.css'
const NewListItem = (props) => {

  const saveListTileHandler=(enteredItem)=> {
    console.log('item in NewList.js', enteredItem)
    props.onAddListItem(enteredItem)
  }

  return(
    <div className="newListItem">
      <ListItemForm onSaveListItem={saveListTileHandler}/>
    </div>

  )

}

export default NewListItem