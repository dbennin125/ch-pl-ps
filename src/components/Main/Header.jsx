import {
  Box,
  useToken,
  useDisclosure,
  Button,
  theme,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useMediaQuery,
  Center,
  Spacer,
  useColorMode,
  Link,
  Text,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-scroll';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)');
  const [green100, blue200] = useToken('colors', ['green.200', 'blue.300']);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const shadowSwap =
    colorMode === 'dark' ? '2px .8px .5px black' : '2px .8px .5px white';
  const smallSwap =
    colorMode === 'dark' ? '1px .3px .5px black' : '1px .3px .5px white';

  function makeLayout() {
    return (
      <Box
        h="80px"
        mt="-80px"
        top="0"
        width="100%"
        fontSize={'3xl'}
        borderWidth="2px"
        borderColor="green.200"
        bg={`linear-gradient(${green100}, ${blue200})`}
        maxW="100%"
        d="flex"
        textAlign="center"
        justifyContent="space-evenly"
        justifyItems="center"
        boxShadow="1px 5px 5px grey"
        pos="sticky"
        zIndex="10"
        textShadow={shadowSwap}
      >
        <Center>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Dan Bennington
          </Text>
        </Center>
        <Divider orientation="vertical" />
        <Center>
          <Link
            size={['md', 'xl']}
            as={ReachLink}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="true"
            onClick={onClose}
            to="about"
          >
            About Me
          </Link>
        </Center>
        <Divider orientation="vertical" />
        <Center>
          <Link
            size={['md', 'xl']}
            as={ReachLink}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="true"
            onClick={onClose}
            to="tech"
          >
            Tech Stack
          </Link>
        </Center>
        <Divider orientation="vertical" />
        <Center>
          <Link
            as={ReachLink}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="true"
            to="education"
          >
            Education
          </Link>
        </Center>
        <Divider orientation="vertical" />
        <Center>
          <ColorModeSwitcher placement="center" />
        </Center>
      </Box>
    );
  }

  if (isDesktop) {
    return makeLayout();
  } else {
    return (
      <>
        <Center>
          <Box
            top={7}
            fontSize={['lg', 'xl']}
            borderWidth="2px"
            borderColor="green.200"
            borderRadius="full"
            maxW="100%"
            bg={`linear-gradient(${green100}, ${blue200})`}
            d="flex"
            justifyContent="center"
            boxShadow="3px 1.5px 1.5px grey"
            // pos="-webkit-sticky"
            // pos="sticky"
            pos="fixed"
            zIndex="10"
          >
            <Button colorScheme={theme} onClick={onOpen}>
              Navigation
            </Button>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Links</DrawerHeader>
                <DrawerBody>
                  <Box
                    top={8}
                    mt={4}
                    p={2}
                    mb={5}
                    fontSize={('md', 'lg', 'xl')}
                    borderWidth="2px"
                    borderColor="green.200"
                    borderRadius="full"
                    bg={`linear-gradient(${green100}, ${blue200})`}
                    maxW="100%"
                    maxH={['md', 'lg', 'xl']}
                    boxShadow={['md', 'lg', 'xl']}
                    d="flex"
                    textAlign="center"
                    justifyContent="center"
                    textShadow={smallSwap}
                  >
                    <Spacer />
                    <ColorModeSwitcher />
                    <Divider orientation="vertical" />
                    <Spacer />
                    <Link
                      as={ReachLink}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      activeClass="true"
                      onClick={onClose}
                      to="about"
                    >
                      Home
                    </Link>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <Link
                      as={ReachLink}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      activeClass="true"
                      onClick={onClose}
                      to="tech"
                    >
                      About
                    </Link>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <Link
                      as={ReachLink}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      activeClass="true"
                      onClick={onClose}
                      to="education"
                    >
                      Education
                    </Link>
                    <Spacer />
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Center>
      </>
    );
  }
};
