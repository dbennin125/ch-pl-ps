import {
  Box,
  Grid,
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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header = () => {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');

  const [green100, blue200] = useToken('colors', ['green.200', 'blue.300']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function makeLayout() {
    return (
      <Center maxW="100%">
        <Box
          m={8}
          p={2}
          fontSize={('md', 'lg', 'xl')}
          borderWidth="2px"
          borderColor="green.200"
          borderRadius="full"
          bg={`linear-gradient(${green100}, ${blue200})`}
          maxW="100%"
          maxH={['sm']}
        >
          <Grid minH={2} p={2} justifyContent="space-around">
            <Stack direction={['column', 'row']} spacing="24px">
              <ColorModeSwitcher />
              <Divider orientation="vertical" />
              <NavLink onClick={onClose} to="/">
                Home
              </NavLink>
              <Divider orientation="vertical" />
              <NavLink onClick={onClose} to="/aboutme">
                About
              </NavLink>
              <Divider orientation="vertical" />
              <NavLink onClick={onClose} to="/education">
                Education
              </NavLink>
            </Stack>
          </Grid>
        </Box>
      </Center>
    );
  }

  if (isDesktop) {
    return makeLayout();
  } else {
    return (
      <>
        <Box
          m={8}
          p={2}
          fontSize={['sm', 'md', 'lg', 'xl']}
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
              <DrawerBody>{makeLayout()}</DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </>
    );
  }
};
