import { Box } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
Box
const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')
    const onMount =(editor) =>{
        editorRef.current = editor;
        editor.focus();
    }
  return (
    <Box>
      <Editor 
      theme='vs-dark'
      height="75vh" 
      defaultLanguage="javascript" 
      defaultValue="// some comment" 
      onMount={
        onMount // when we refresh the page, it should focus on editor
      }
      value={value}
      onChange={(value )=>setValue (value)}
      />;
    </Box>
  )
}

export default CodeEditor;
