import ListItems from './ListItems'
import NewListItem from '../NewListItem/NewListItem'
import {useState} from 'react'
import './List.css'

const DUMMY_LIST_ITEMS = []

const List = (props) => {
  
  const [listItems, setListItems] = useState(DUMMY_LIST_ITEMS)

  const addListItemHandler=(enteredItem) => {
    setListItems(prevItems => {
      return [enteredItem, ...prevItems]
    })
  }

 return(
   <div className="list">
     <h5 className="list_title">{props.title}</h5>
     <NewListItem onAddListItem={addListItemHandler}/>
     {/* dynamic addition of List Items */}
      <ListItems items={listItems}/>
   </div>
 )
}

export default List