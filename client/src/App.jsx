import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import OutputPane from './components/OutputPane';
import './App.css';

function App() {
  const [language, setLanguage] = useState('cpp');
  const [theme, setTheme] = useState('vs-dark');
  const [code, setcode] = useState('/* Start Coding here');

  function submithandler() {
    
  }

  return (
    <div className="app">
      <Navbar onLanguageChange={setLanguage} onThemeChange={setTheme} />
      <div className="editor-output-container">
        <CodeEditor language={language} theme={theme} code={code} setcode={setcode}/>
        <OutputPane />
      </div>
      <div className='btn'>
        <button onClick={submithandler}>Submit</button>
      </div>
    </div>
  );
}

export default App;
