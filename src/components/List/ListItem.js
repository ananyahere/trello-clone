import './ListItem.css'

const ListItem = (props) => {
  return(
    <div className="listitem">{props.item}</div>
  )
}

export default ListItem