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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
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
      <Center id="splash">
        <Box
          top={7}
          m={2}
          width="98%"
          fontSize={'3xl'}
          borderWidth="2px"
          borderColor="green.200"
          borderRadius="full"
          bg={`linear-gradient(${green100}, ${blue200})`}
          maxW="100%"
          d="flex"
          textAlign="center"
          justifyContent="center"
          boxShadow="10px 5px 5px grey"
          // pos="sticky"
          // zIndex="1"
          pos="fixed"
          zIndex="1"
          textShadow={shadowSwap}
        >
          <Spacer />
          <Center>
            <ColorModeSwitcher />
          </Center>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="#main">
            Home
          </NavLink>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="#aboutme">
            About
          </NavLink>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="#education">
            Education
          </NavLink>
          <Spacer />
        </Box>
      </Center>
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
            zIndex="1"
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
                    <NavLink onClick={onClose} to="#main">
                      Home
                    </NavLink>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <NavLink onClick={onClose} to="#aboutme">
                      About
                    </NavLink>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <NavLink onClick={onClose} to="#education">
                      Education
                    </NavLink>
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
