import React from 'react';
import { Box, Heading, Image, Text, Center } from '@chakra-ui/react';

const Figure = ({ title, copyright, url, explanation, media_type }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4} textAlign="center">{title}</Heading>

      {media_type === 'image' && <Image src={url} alt={title} mb={4} mx="auto"/>}  
      {media_type === 'video' && <Center><iframe src={url} title={title} /></Center>}

      <Text fontSize="sm" fontWeight="bold" mb={2} textAlign="center" >© {copyright}</Text>
      <Text>{explanation}</Text>
    </Box>
  );
};

export default Figure;
