import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ language, theme, code,setcode}) => {

  function codehandler (value) {
    setcode(value);
  }

  return (
    <div className="code-editor">
      <MonacoEditor
        height="100%"
        width="100%"
        value={code}
        language={language}
        theme={theme}
        onChange={codehandler}
        options={{
            selectOnLineNumbers: true,
            minimap: { enabled: true },
            lineNumbers: "on",
            bracketPairColorization: true,
            fontSize: 14,
            wordWrap: "on",
            autoClosingBrackets: "always",
            folding: true,
            showUnused: true,
            renderWhitespace: "boundary",
            suggestOnTriggerCharacters: true,
            tabSize: 4,
          }}
      />
    </div>
  );
};

export default CodeEditor;
