// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState}  from 'react';
import './App.css';

import FormDisplay from './components/Form'
import BoxDisplay from './components/BoxDisplay'


function App() {
  const [boxes, setBoxes] = useState([]);

  const makeNewBox = (box) => {
    setBoxes([...boxes, box])
  }
  
  const boxElements = boxes.map(box => <BoxDisplay color = {box.color} />)

  return (
    <div className="App">
      <div>
        <FormDisplay makeNewBox = {makeNewBox} />
      </div>
      <div>
        {boxElements}
      </div>
    </div>
  );
}

export default App;
