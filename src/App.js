import {useState} from 'react';
import './App.css';

//COMPONENT(All the functionalities below can be reused in the component)
function Square({value}){
  const [name, setName] = useState(null);


  function handlleButtonClick(){
    setName('X');
    console.log('Click action', name);
  }

   
  return (
  <button onClick = {handlleButtonClick} className = 'square'>{name}</button>
  );
}

function App() {
  return (
    
    <div className="board">
      <h1><strong>TIC TAC TOE</strong></h1>
      <div className = 'board-row'>
        <Square />
        <Square  />
        <Square />
      </div>

      <div className = 'board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      
      <div className = 'board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>

    </div>
  );
}

export default App;
