import { Box, Flex, Heading, Text, Center } from '@chakra-ui/react';
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
    <Center>
      <Box
        bgImg="./bgimage.jpg"
        borderWidth="2px"
        borderColor="green.200"
        borderRadius=""
        textAlign="center"
      >
        <Heading>Hi I'm {name}</Heading>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          I'm a {role} currently located in {city}, {state}. {description}.
          Please feel free email me! {email}
        </Text>
      </Box>
    </Center>
  );
};
