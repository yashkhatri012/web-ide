import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'
import LanguageSelector from './components/LanguageSelector'


function App() {
  return (
    <>
      <Box
      minH ="100vh" bg='#0f0a19' color='gray.500' px={6} py={8}

      >
        <LanguageSelector/>
        <CodeEditor/>
      </Box>
    </>
  )
}

export default App
