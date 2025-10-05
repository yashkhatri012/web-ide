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

const LanguageSelector = ({language, onSelect}) => {
  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Language:{" "}
      </Text>
      <Menu>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem color="gray.300"
            onClick={()=> onSelect(language) }
            key={language}>
              {language}
            &nbsp;
            <Text as="span" color ="gray.500" fontSize="sm" >
              {version}
            </Text>
             </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
