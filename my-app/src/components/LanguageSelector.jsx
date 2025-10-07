import { Box, Button, Text } from "@chakra-ui/react";
import React, { version } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR ="blue.400"
const LanguageSelector = ({language, onSelect}) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:{" "}
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b" >
          {languages.map(([lang, version]) => (
            <MenuItem 
            bg={
              lang=== language ? "gray.900" : "transparent"
            }
            _hover={{
              color: ACTIVE_COLOR,
              bg:"gray.900"
            }}
            color={
              lang=== language ?ACTIVE_COLOR :""
            }
            onClick={()=> onSelect(lang) }
            key={lang}>
              {lang}
            &nbsp;
            <Text as="span" color ="gray.500" fontSize="sm" >
              ({version})
            </Text>
             </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
