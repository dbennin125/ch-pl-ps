import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';

import { Logo } from '../../Logo';

function NewApp() {
  return (
    <Box textAlign="center" fontSize="xl" id="education">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="sm">src/App.js</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
}

export default NewApp;
