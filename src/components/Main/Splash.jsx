import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
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
    <Flex>
      <Box textAlign="center" maxW="500px" color="gray.100">
        <h1>Hi I'm {name}</h1>
        <Text fontSize="lg">
          I'm a {role} currently located in {city}, {state}. {description}.
          Please feel free email me! <>{email}</>.
        </Text>
      </Box>
    </Flex>
  );
};
