import { Box } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
Box
const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')
  return (
    <Box>
      <Editor 
      theme='vs-dark'
      height="75vh" 
      defaultLanguage="javascript" 
      defaultValue="// some comment" />;
      value={value}
      onChange={(value )=>setValue (value)}

    </Box>
  )
}

export default CodeEditor;
