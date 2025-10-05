import { Box } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from "../constants";
const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')
    const [language, setLanguage] = useState('javascript')

    const onMount =(editor) =>{
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
      setLanguage(language)
      setValue(
        CODE_SNIPPETS[language]
      )
    }
  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect}  />
      <Editor 
      theme='vs-dark'
      height="75vh" 
      language={language}
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
