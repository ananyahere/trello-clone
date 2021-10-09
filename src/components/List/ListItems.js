import ListItem from './ListItem'
import './ListItems.css'
const ListItems = (props) => {
  return(
    <div className="listitems">
      {props.items.map((item,index) => (
        <ListItem item={item} key={index}/>
      ))}
      </div>
  )
}

export default ListItems
