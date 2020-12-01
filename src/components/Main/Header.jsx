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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import './Header.css';

export const Header = () => {
  const [isDesktop] = useMediaQuery('(min-width: 813px)');
  const [green100, blue200] = useToken('colors', ['green.200', 'blue.300']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function makeLayout() {
    return (
      <Center>
        <Box
          top={7}
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
          pos="fixed"
          zIndex="1"
        >
          <Spacer />
          <Center>
            <ColorModeSwitcher />
          </Center>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="/">
            Home
          </NavLink>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="/aboutme">
            About
          </NavLink>
          <Divider orientation="vertical" />
          <Spacer />
          <NavLink onClick={onClose} to="/education">
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
            boxShadow="10px 5px 5px grey"
            pos="fixed"
            zIndex="1"
          >
            <Button zIndex="0" colorScheme={theme} onClick={onOpen}>
              Navigation
            </Button>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Links</DrawerHeader>
                <DrawerBody>
                  <Box
                    mt={3}
                    p={1}
                    fontSize={('md', 'lg', 'xl')}
                    borderWidth="2px"
                    borderColor="green.200"
                    borderRadius="full"
                    bg={`linear-gradient(${green100}, ${blue200})`}
                    maxW="100%"
                    maxH={['md', 'lg', 'xl']}
                    boxShadow="5px 1.5px 1.5px 1px grey"
                    d="flex"
                    textAlign="center"
                    justifyContent="center"
                  >
                    <Spacer />
                    <ColorModeSwitcher />
                    <Divider orientation="vertical" />
                    <Spacer />
                    <NavLink onClick={onClose} to="/">
                      Home
                    </NavLink>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <NavLink onClick={onClose} to="/aboutme">
                      About
                    </NavLink>
                    <Divider orientation="vertical" />
                    <Spacer />
                    <NavLink onClick={onClose} to="/education">
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
