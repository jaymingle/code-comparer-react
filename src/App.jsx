import React, {useState} from 'react';
import './App.css'

function App() {

    const [textAreaA, setTextAreaA] = useState('');
    const [textAreaB, setTextAreaB] = useState('');

    console.log('app')

  return (
      <div className="App">
          <div className="formA">
              Text A
              <textarea name="" id="" cols="60" rows="40"/>

          </div>
          <div className="formB">
              Text B

              <textarea name="" id="" cols="60" rows="40"/>
          </div>
      </div>
  )
}

export default App
