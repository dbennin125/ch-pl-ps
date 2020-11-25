import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header = () => {
  return (
    <Box
      m={8}
      p={2}
      fontSize={['sm', 'md', 'lg', 'xl']}
      borderWidth="2px"
      borderColor="green.200"
      borderRadius={['sm', 'md', 'lg', 'xl']}
      maxW="100%"
    >
      <Flex d="flex" justifyContent="space-evenly">
        <ColorModeSwitcher />
        <Box mt={1}>
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box mt={1}>
          <NavLink to="/aboutme">About Me</NavLink>
        </Box>
        <Box mt={1}>
          <NavLink to="/education">Education</NavLink>
        </Box>
      </Flex>
    </Box>
  );
};
