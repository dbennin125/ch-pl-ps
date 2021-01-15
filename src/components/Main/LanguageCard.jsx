import {
  Box,
  Center,
  Heading,
  Flex,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
  Divider
} from '@chakra-ui/react';
import React from 'react';

export const LanguageCard = ({
  technologies
}) => {

  // const [green, blue] = useToken('colors', ['green.200', 'blue.300']);
  const { colorMode } = useColorMode();
  
 const imageBorderSwap = 
    colorMode === 'dark' ? 'xl solid #d3d3d3' : 'xl solid #080808';

  const imageBorderShadowSwap = 
    colorMode === 'dark' ? '0px 6px 13px 0px #080808' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

  const cardBackGroundColorSwap = 
    colorMode === 'dark' ? '#404040' : '#D8D8D8';

  const shadowSwap =
    colorMode === 'dark' ? '1px .8px .5px black' : '1px .8px .5px white';
  
    const pictureMobileSwap =
    colorMode === 'dark' ? "url('dark-bg-full.jpg')" : "url('js.png')";

  const pictureSwap =
    colorMode === 'dark' ? "url('static.jpg')" : "url('dark-bg-full.jpg')";

  const [isDesktop] = useMediaQuery('(min-width: 813px)');


  const techElement = technologies.map(item => (

    <Box           
    borderWidth='2px'
    borderColor='green.200'
    shadow={['md', 'lg', 'xl']} 
    key={item.name + item.image} 
    w={135} 
    m={3}
    p={5}
    bgColor={cardBackGroundColorSwap}
    // shadow={imageBorderShadowSwap}
    >
      <Center  pb={4} h={110}>
      <Image p={2} border={imageBorderSwap} shadow={imageBorderShadowSwap} borderRadius='15px' src={item.image} alt={item.name}/>
      </Center>
        <Divider orientation='horizontal' />
      <Center p={3}>
      <Text 
      align='center'
      fontSize={['xl', '2xl']}
      textShadow={shadowSwap}
      fontFamily='monospace'
      m={2}
      p={1}
      >
        {item.name}
      </Text>
      </Center>
    </Box>
    
  ))

  if (isDesktop) {
    return (
      <Center
      mt='110px' 
      bgImg={pictureSwap}     
      bgPos='center'
      backgroundRepeat='no-repeat'
      bgAttachment='fixed'
      bgSize='110%' 
      h='100vh' 
      id="aboutme"
      >
        <Heading flex='column'>Current tech stack</Heading>
        <Flex justify='center' direction='row' wrap='wrap'>
          {techElement}
        </Flex>
        </Center>
    );
  } else {
    return (
      <>
        <Center 
        mt={1} 
         bgImg={pictureMobileSwap}     
         bgPos='center'
         backgroundRepeat='no-repeat'
         bgAttachment='fixed'
         bgSize='110%' h='100vh'
        id="aboutme">
        
        <Flex justify='center' direction='row' wrap='wrap'>
            {techElement}
          </Flex>
        </Center>
      </>
    );
  }
};
