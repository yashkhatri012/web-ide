import { Box , Text} from '@chakra-ui/react'
import React from 'react'
import { Button, Menu, Portal } from "@chakra-ui/react"
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)
 
const LanguageSelector = () => {
  return (
    <Box>
      <Text mb={2} fontSize='lg'>Language: </Text>
      <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          JavaScript
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
                languages.map((language,version)=>(
                    <Menu.Item  key={language}>
                    {language}
                    
                    <Text   as="span" color="gray.600" fontSize="sm">{version} </Text>
                    </Menu.Item>
                ) )
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </Box>
  )
}

export default LanguageSelector
