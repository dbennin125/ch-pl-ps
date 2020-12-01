import { Box, Heading, Text, Center } from '@chakra-ui/react';
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
    <Box
      top={5}
      m={10}
      p={2}
      borderWidth="2px"
      borderColor="green.200"
      textAlign="center"
      boxShadow="5px 1.5px 1.5px 1px grey"
      bgImg="url('bgimage.jpg')"
      bgPos="center"
      backgroundRepeat="no-repeat"
      bgAttachment="fixed"
      bgSize="110%"
      // maxH="100%'
      height="75vh"
      justifyContent="center"
    >
      <Center>
        <Box h="100px">
          <Heading m={8}>Hi I'm {name}</Heading>
          <Box bgColor="gray.300" opacity=".87">
            <Center>
              <Text
                top={10}
                h="50vh"
                color="teal.500"
                fontSize={['xl', '2xl']}
                textShadow="2px .8px .5px grey.400"
                fontFamily="fantasy"
              >
                I'm a {role} currently located in {city}, {state}. {description}
                . Please feel free email me! {email}
              </Text>
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
