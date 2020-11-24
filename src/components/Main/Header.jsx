import {
  ChakraProvider,
  Box,
  Text,
  //   Link,
  //   VStack,
  //   Code,
  //   Grid,
  theme,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Text fontFamily="fantasy">I am a header!</Text>
      </Box>
    </ChakraProvider>
  );
};
