import NewList from './components/NewList/NewList'
import Lists from './components/List/Lists'
import {useState} from 'react'

const DUMMY_LIST_TITLE= []

function App() {
  const [listTitles, setListTitles] = useState(DUMMY_LIST_TITLE)

  const addListTitleHandler = (enteredTitle) =>{
    setListTitles(prevTitles => {
      return [enteredTitle, ...prevTitles]
    })
  } 


  return (
    <div>
      <NewList onAddListTitle={addListTitleHandler}/>
      <Lists ListTitles={listTitles}/>
    </div>
  );
}

export default App;
