import React, {useState} from 'react';
import DiffMatchPatch from 'diff-match-patch';
import './App.css'

function App() {

    const [textAreaA, setTextAreaA] = useState('');
    const [textAreaB, setTextAreaB] = useState('');
    const [diffResults, setDiffResults] = useState('');

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

    const handleDiffCalculation = () => {
        const diffs = dmp.diff_main(textAreaA, textAreaB);
        dmp.diff_cleanupSemantic(diffs);
        const htmlDiff = dmp.diff_prettyHtml(diffs);
        setDiffResult(htmlDiff);
    };


    return (
        <div className="auto-margin">
            <div className="App">
                <div className="formA">
                    Text A
                    <textarea value={textAreaA} onChange={e => changeHandler(e, 'inputA')} name="" id="" cols="60"
                              rows="40"/>
                </div>
                <div className="formB">
                    Text B
                    <textarea value={textAreaB} onChange={e => changeHandler(e, 'inputB')} name="" id="" cols="60"
                              rows="40"/>
                </div>
            </div>
            <button onClick={handleDiffCalculation}>Compare Texts</button>
            <div className="diff-result" dangerouslySetInnerHTML={{__html: diffResult}}/>
        </div>

    )
}

export default App
