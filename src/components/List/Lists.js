import List from './List'
import './Lists.css';

const Lists = (props) => {
  return(
    <div className="lists">
      {props.ListTitles.map((title,index) => (
        <List title={title} key={index}/>
      ))}
    </div>
  )
}

export default Lists;