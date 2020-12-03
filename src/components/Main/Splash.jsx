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

export const Splash = ({
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
    colorMode === 'dark' ? "url('mobileStatic.jpg')" : "url('js.png')";

  const pictureSwap =
    colorMode === 'dark' ? "url('static.jpg')" : "url('js.png')";

  const [isDesktop] = useMediaQuery('(min-width: 813px)');

  if (isDesktop) {
    return (
      <Center mt={['100px']} id="main">
        <Container
          // mt={50}
          m={8}
          p={2}
          textAlign="center"
          borderWidth="2px"
          borderColor="green.200"
          shadow={['md', 'lg', 'xl']}
          bgImg={pictureSwap}
          // bg={`linear-gradient(${blue}, ${green})`}
          bgPos="center"
          backgroundRepeat="no-repeat"
          bgAttachment="fixed"
          bgSize="110%"
          // maxH="110%"
          h="75vh"
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
        <Center mt={['100px']} id="main">
          <Container
            // mt={50}
            m={8}
            p={2}
            textAlign="center"
            borderWidth="2px"
            borderColor="green.200"
            shadow={['md', 'lg', 'xl']}
            bgImg={pictureMobileSwap}
            // bg={`linear-gradient(${blue}, ${green})`}
            bgPos="center"
            backgroundRepeat="no-repeat"
            // bgAttachment="fixed"
            bgSize="100%"
            // maxH="110%"
            h="55vh"
            centerContent
            // maxW="100%"
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
                . Please feel free email me!{' '}
                <Link href={`mailto:${email}`}>{email}</Link>
              </Text>
            </Center>
          </Container>
        </Center>
      </>
    );
  }
};
