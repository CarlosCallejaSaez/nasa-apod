import React from 'react';
import { Box, Heading, Image, Text, Center } from '@chakra-ui/react';
import App from '../App.css';

const Figure = ({data,dataMars}) => {
    if (data){
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4} textAlign="center">{data.title}</Heading>

      {data.media_type === 'image' && <Image src={data.url} alt={data.title} mb={4} mx="auto"/>}  
      {data.media_type === 'video' && <Center><iframe src={data.url} title={data.title} /></Center>}

      <Text fontSize="sm" fontWeight="bold" mb={2} textAlign="center" >© {data.copyright}</Text>
      <Text>{data.explanation}</Text>
      
    </Box>
  );}

  if(dataMars){
    return (<div className='mars'>
        <img src={dataMars.img_src}/>  
        </div>

    )
  }
};

export default Figure;
