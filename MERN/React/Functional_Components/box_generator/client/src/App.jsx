// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState }  from 'react';
import './App.css';
import FormDisplay from './components/Form'
import BoxDisplay from './components/BoxDisplay'


function App() {
  const [boxes, setNewBox] = useState([]);

  const newBox = (box) => {
    setNewBox([...boxes, box])
  }
  
  const boxElements = boxes.map(box => <BoxDisplay color = {box.color} />)
  console.log(boxes);

  return (
    <div className="App">
      <div>
        <FormDisplay newBox = {newBox} />
      </div>
      <div>
        <h2>Boxes</h2>
        {boxElements}
      </div>
    </div>
  );
}

export default App;
