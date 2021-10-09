import ListForm from './ListForm';
import './NewList.css';
const NewList = (props) => {

  const saveListTitleHandler = (enteredTitle) => {
    props.onAddListTitle(enteredTitle)
    
  }

  return (
    <div className="new-list">
      <ListForm onSaveListTitle={saveListTitleHandler}/>
    </div>
  )
}

export default NewList