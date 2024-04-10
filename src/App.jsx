import React, {useState} from 'react';
import './App.css'

function App() {

    const [textAreaA, setTextAreaA] = useState('');

    console.log('app')

  return (
      <div className="App">
          <div className="formA">
              Text A
              <textarea name="" id="" cols="60" rows="40">
                  
              </textarea>
          </div>
          <div className="formB">
              Text B

              <textarea name="" id="" cols="60" rows="40">

              </textarea>
          </div>
      </div>
  )
}

export default App
