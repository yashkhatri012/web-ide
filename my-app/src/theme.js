// theme.js
import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          100: '#dce2e7ff',
          900: '#1a202c',
        },
      },
    },
  },
});
