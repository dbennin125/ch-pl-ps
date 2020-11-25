import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Splash = ({
  splash: {
    name,
    role,
    description,
    email,
    address: { city, state },
  },
}) => {
  return (
    <Flex d="flex" justify="center">
      <Box
        bg="cyan.900"
        borderWidth="2px"
        borderColor="green.200"
        borderRadius={['sm', 'md', 'lg', 'xl']}
        textAlign="center"
        maxW={['sm', 'md', 'lg', 'xl']}
      >
        <Text fontSize={['lg', 'xl']}>Hi I'm {name}</Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          I'm a {role} currently located in {city}, {state}. {description}.
          Please feel free email me! {email}
        </Text>
      </Box>
    </Flex>
  );
};
