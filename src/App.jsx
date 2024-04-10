import React, {useState} from 'react';
import DiffMatchPatch from 'diff-match-patch';
import './App.css'

function App() {

    const [textAreaA, setTextAreaA] = useState('');
    const [textAreaB, setTextAreaB] = useState('');

    const dmp = new DiffMatchPatch();

    const changeHandler = (e, id) => {
        if(id === 'inputA') {
            setTextAreaA(e.target.value)
            console.log(textAreaA)
        }else{
            setTextAreaB(e.target.value)
            console.log(textAreaB)
        }
    }

  return (
      <div className="App">
          <div className="formA">
              Text A
              <textarea value={textAreaA} onChange={e => changeHandler(e, 'inputA')} name="" id="" cols="60" rows="40"/>
          </div>
          <div className="formB">
              Text B
              <textarea value={textAreaB} onChange={e => changeHandler(e, 'inputB')} name="" id="" cols="60" rows="40"/>
          </div>
      </div>
  )
}

export default App
