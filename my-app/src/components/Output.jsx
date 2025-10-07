import { Box, Button , Text } from '@chakra-ui/react'
import React from 'react'
import { executeCode } from './api.js';
 
const Output = ({editorRef, language}) => {

    const runCode = async () => {
         const sourceCode  = editorRef.current.getValue();
         if(!sourceCode) return;
         try{
            const {} = await executeCode(language, sourceCode)

         } catch (error){

         }
    }
  return (
    <Box w='50%'>
      <Text mb={2} fontSize='lg'>
        Output
      </Text>
      
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        onClick={runCode}
        
      >
        Run Code
      </Button>

      <Box
        height="75vh"
        p={2}
        color="red.400"
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        text
      </Box>
    </Box>
  )
}

export default Output
