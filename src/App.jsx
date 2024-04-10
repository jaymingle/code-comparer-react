import React, {useState} from 'react';
import './App.css'

function App() {

    console.log('app')

  return (
      <div className="App">
          <div className="formA">
              Text A
              <textarea name="" id="" cols="30" rows="10">
                  
              </textarea>
          </div>
          <div className="formB">
              <textarea name="" id="" cols="30" rows="10"></textarea>
              Text B
          </div>
      </div>
  )
}

export default App
