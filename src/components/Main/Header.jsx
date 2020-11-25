import {
  Box,
  Stack,
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

export const Header = () => {
  const [isDesktop] = useMediaQuery('(min-width: 813px)');

  const [green100, blue200] = useToken('colors', ['green.200', 'blue.300']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function makeLayout() {
    return (
      <Box
        m={8}
        p={2}
        fontSize={'3xl'}
        borderWidth="2px"
        borderColor="green.200"
        borderRadius="full"
        bg={`linear-gradient(${green100}, ${blue200})`}
        maxW="100%"
        d="flex"
        textAlign="center"
        justifyContent="center"
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
    );
  }

  if (isDesktop) {
    return makeLayout();
  } else {
    return (
      <>
        <Center>
          <Box
            m={8}
            p={2}
            fontSize={['md', 'xl']}
            borderWidth="2px"
            borderColor="green.200"
            borderRadius="full"
            maxW="100%"
            bg={`linear-gradient(${green100}, ${blue200})`}
            d="flex"
            justifyContent="center"
          >
            <Button colorScheme={theme} onClick={onOpen}>
              Navigation
            </Button>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Links</DrawerHeader>
                <DrawerBody>
                  <Center>
                    <Box
                      m={8}
                      p={2}
                      fontSize={('md', 'lg', 'xl')}
                      borderWidth="2px"
                      borderColor="green.200"
                      borderRadius="full"
                      bg={`linear-gradient(${green100}, ${blue200})`}
                      maxW={['md', 'lg', 'xl']}
                      maxH={['md', 'lg', 'xl']}
                    >
                      <Stack direction="row" spacing={3} maxW="100%">
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
                      </Stack>
                    </Box>
                  </Center>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Center>
      </>
    );
  }
};
