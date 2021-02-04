import {
  Box,
  Center,
  Heading,
  Flex,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
  Divider,
  HStack,
  // Container,
} from '@chakra-ui/react';
import React from 'react';

export const LanguageCard = ({ technologies }) => {
  // const [green, blue] = useToken('colors', ['green.200', 'blue.300']);
  const { colorMode } = useColorMode();

  const imageBorderSwap =
    colorMode === 'dark' ? 'xl solid #d3d3d3' : 'xl solid #080808';

  const imageBorderShadowSwap =
    colorMode === 'dark'
      ? '0 6px 13px 0 #080808, 0 6px 20px 0 #101010'
      : '0 4px 8px 0 #DCDCDC, 0 6px 20px 0 #D3D3D3';

  const cardBackGroundColorSwap = colorMode === 'dark' ? '#404040' : '#00B1AF';

  const imageBGColor = colorMode === 'dark' ? '#D8D8D8' : '#404040';

  const shadowSwap =
    colorMode === 'dark' ? '1px .8px .5px black' : '1px .8px .5px white';

  const pictureMobileSwap =
    colorMode === 'dark' ? "url('dark-bg-full.jpg')" : "url('js.png')";

  const pictureSwap =
    colorMode === 'dark' ? "url('blackscreen.jpg')" : "url('light-screen.png')";

  const [isDesktop] = useMediaQuery('(min-width: 813px)');

  const cardSizeWidthSwap =
    isDesktop === 'min-width: 813px' ? '125px' : '110px';
  const cardSizeHeightSwap =
    isDesktop === 'min-width: 813px' ? '300px' : '45px';

  const techCard = technologies.map(item => (
    <HStack>
      <Box
        borderWidth="2px"
        borderColor="green.200"
        shadow={['md', 'lg', 'xl']}
        key={item.name + item.image}
        w={cardSizeWidthSwap}
        m={3}
        p={5}
        bgColor={cardBackGroundColorSwap}
        className="card"
      >
        <Center pb={4} h={100}>
          <Image
            bgColor={imageBGColor}
            p={2}
            border={imageBorderSwap}
            shadow={imageBorderShadowSwap}
            borderRadius="15px"
            src={item.image}
            alt={item.name}
          />
        </Center>
        <Divider orientation="horizontal" />
        <Center p={3}>
          <Text
            align="center"
            fontSize={['xl', '2xl']}
            textShadow={shadowSwap}
            fontFamily="monospace"
            m={2}
            p={1}
          >
            {item.name}
          </Text>
        </Center>
      </Box>
    </HStack>
  ));

  if (isDesktop) {
    return (
      <Center
        mt="80px"
        border="10px 2px red"
        t="0"
        // mt="110px"
        bgImg={pictureSwap}
        bgPos="center"
        backgroundRepeat="no-repeat"
        // bgAttachment="fixed"
        // bgSize="500vw"
        h="155vh"
        maxH="100%"
        w="100%"
        // h="110vh"
        id="tech"
      >
        <Box h={cardSizeHeightSwap} w="75%" mb="100vh">
          <Center flexDir="column">
            <Heading
              m={4}
              mb={3}
              textShadow={shadowSwap}
              fontFamily="monospace"
              fontSize={['5xl', '7xl']}
            >
              Current tech stack
            </Heading>
            <Flex w="100wv" justify="center" direction="row" wrap="wrap">
              {techCard}
            </Flex>
            <Box></Box>
          </Center>
        </Box>
      </Center>
    );
  } else {
    return (
      <>
        <Center
          mt={1}
          bgImg={pictureMobileSwap}
          bgPos="center"
          backgroundRepeat="no-repeat"
          bgAttachment="fixed"
          bgSize="110%"
          h="75vh"
          id="aboutme"
        >
          <Box mb="20vh">
            <Center flexDir="column">
              <Heading
                m={4}
                mb={3}
                textShadow={shadowSwap}
                fontFamily="monospace"
                fontSize={['xl', '2xl']}
              >
                Current tech stack
              </Heading>
              <Box w="35%">
                <Flex w="100wv" justify="center" direction="row" wrap="wrap">
                  {techCard}
                </Flex>
              </Box>
            </Center>
          </Box>
        </Center>
      </>
    );
  }
};
