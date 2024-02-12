import React from 'react';
import { Box, Heading, Image, Text, Center, AspectRatio, VStack, useBreakpointValue } from '@chakra-ui/react';

const Figure = ({ data, dataMars }) => {
  
  const headingSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  if (data) {
    return (
      <VStack spacing={4} align="center" justify="center" minHeight="100vh" paddingX={4} >
        <Heading as="h2" size={headingSize} textAlign="center" noOfLines={2} maxWidth="90%" color="whiteAlpha.900" style={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
      }}>
          {data.title}
        </Heading>

        {data.media_type === 'image' ? (
          <Image src={data.url} alt={data.title} maxH="70vh" objectFit="contain" rounded="md" boxShadow="xl"/>
        ) : (
          <AspectRatio ratio={16 / 9} maxWidth="95%" width="100%" maxHeight="70vh">
            <iframe src={data.url} title={data.title} allowFullScreen />
          </AspectRatio>
        )}

        <Text fontSize={textSize} fontWeight="bold"  color="whiteAlpha.900" style={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
      }}>
          © {data.copyright}
        </Text>
      <Text textAlign="center" size={"lg"}  px={2} maxWidth="70%" color="blackAlpha.900" style={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
        backdropFilter: 'blur(1000px)',
        borderRadius: '10px', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
        
      }}>
          {data.explanation}
        

          
          
        </Text>
      </VStack>
    );
  }

  if (dataMars) {
    return (
      <Center minHeight="100vh" flexDirection="column" paddingX={4}>
        <Image src={dataMars.img_src} alt="Mars Rover Image" maxH="70vh" objectFit="contain" rounded="md" boxShadow="xl" marginBottom={4}/>
      </Center>
    );
  }

  return null;
};

export default Figure;
