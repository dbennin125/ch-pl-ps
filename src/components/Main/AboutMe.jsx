import {
  Heading,
  Text,
  Center,
  Container,
  Link,
  // useToken,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

export const AboutMe = ({
  splash: {
    name,
    role,
    description,
    email,
    address: { city, state },
  },
}) => {
  // const [green, blue] = useToken('colors', ['green.200', 'blue.300']);
  const { colorMode } = useColorMode();
  const shadowSwap =
    colorMode === 'dark' ? '1px .8px .5px black' : '1px .8px .5px white';
  const pictureMobileSwap =
    colorMode === 'dark' ? "url('mobileStatic.jpg')" : "url('lightbg.jpg')";

  const pictureSwap =
    colorMode === 'dark' ? "url('static.jpg')" : "url('lightbg.jpg')";

  const [isDesktop] = useMediaQuery('(min-width: 813px)');

  if (isDesktop) {
    return (
      <Center
        // mt={2}
        bgImg={pictureSwap}
        bgPos="center"
        backgroundRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="110%"
        h="100vh"
        id="about"
        mb="100px"
      >
        <Container
          // mt='80px'
          textAlign="center"
          borderColor="green.200"
          centerContent
          maxW="100%"
          w="110%"
          borderRadius={['lg', 'xl']}
        >
          <Heading m={4} p="2" textShadow={shadowSwap}>
            Hi I'm {name}
          </Heading>
          <Center>
            <Text
              fontSize={['xl', '2xl']}
              textShadow={shadowSwap}
              fontFamily="monospace"
              m={2}
              p={1}
            >
              I'm a {role} currently located in {city}, {state}. {description}.
              Please feel free email me!{' '}
              <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
          </Center>
        </Container>
      </Center>
    );
  } else {
    return (
      <>
        <Center
          // mt={1}

          bgImg={pictureMobileSwap}
          bgPos="center"
          backgroundRepeat="no-repeat"
          bgAttachment="fixed"
          bgSize="110%"
          h="100vh"
          id="main"
        >
          <Container
            // mt={2}
            // p={2}
            textAlign="center"
            centerContent
            // maxW='100%'
            bgPos="center"
            w="110%"
            borderRadius={['lg', 'xl']}
          >
            <Heading m={4} p="2" textShadow={shadowSwap}>
              Hi I'm {name}
            </Heading>
            <Center>
              <Text
                fontSize={['xl', '2xl']}
                textShadow={shadowSwap}
                fontFamily="monospace"
                m={2}
                p={1}
              >
                I'm a {role} currently located in {city}, {state}. {description}
                . Please feel free email me!
                <Link href={`mailto:${email}`}>{email}</Link>
              </Text>
            </Center>
          </Container>
        </Center>
      </>
    );
  }
};
