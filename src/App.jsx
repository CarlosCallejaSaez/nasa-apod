import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset, Box, Select, Heading, Input, Text, Center } from '@chakra-ui/react';
import Figure from './components/Figure';
import "./App.css"
import ReactPlayer from 'react-player';

function App() {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);
  const [dataMars, setDataMars] = useState([]);
  const [api, setApi] = useState("apod");
  const isDesktop = window.innerWidth > 500;

  const NASA_API_KEY = "ss9M5D2dUzV3Ppryxhsm56x71CcG7OTQfrrwC9U4";
  const baseUrlApod = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`;
  const baseUrlMars = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`;

  useEffect(() => {
    if (api === "apod") {
      const APODFetching = async () => {
        const response = await fetch(baseUrlApod);
        const data = await response.json();
        setData(data);
      };
      APODFetching();
    } else if (api === "mars") {
      const marsFetching = async () => {
        const response = await fetch(baseUrlMars);
        const data = await response.json();
        setDataMars(data.photos[0]);
      };
      marsFetching();
    }
  }, [api, date]);

  const handleInput = (ev) => {
    setDate(ev.target.value);
  };

  
  return (
    <ChakraProvider>
      <CSSReset />
      <Box minHeight="100vh" bgImage="url('./stars.gif')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" position="relative">
     
        <Box
          position="absolute"
          top="30%"
          left="90%"
          transform="translate(-50%, -50%)"
          animation="float 5s infinite"
          zIndex="1"
        >
          <img src="./nasa.png" alt="NASA Logo" width="100" height="100" />
        </Box>

        <Box p={4}   rounded="md">
          <Center>
            <Select placeholder='Select API' onChange={(ev) => setApi(ev.target.value)} color={'blackeAlpha.900'} backgroundColor={'whiteAlpha.900'} width={300}>
              <option value='apod'  >Apod</option>
              <option value='mars'>Mars</option>
            </Select>
          </Center>
          <Heading as="h1" size="xl" mb={4} textAlign="center" color={'whiteAlpha.800'}>
            Astronomical Image of the Day
          </Heading>
          <Text mb={2} textAlign="center" color={'whiteAlpha.800'} >This image corresponds to the date {date}</Text>
          <Center>
            <Text mb={2} textAlign="center" color={'whiteAlpha.800'} >Select other date <br/> </Text>
            <br/>  
          </Center>
          <Center>
            <Input type="date" max={today} onChange={handleInput}  color="whiteAlpha.900" mb={2} size="md" textAlign="center" width="200px"/>
          </Center>

          {api==="apod" && <Figure data={data}/> }
          {api==="mars" && <Figure dataMars={dataMars} />}
          <Box
            position={isDesktop ? "fixed" : "relative"}
            bottom="20px"
            left={isDesktop ? "20px" : "auto"}
            right={isDesktop ? "auto" : "0"}
            width={isDesktop ? "200px" : "100px"}
            zIndex="999"
          >
            <ReactPlayer
              url="./universe.mp3"
              width="100%"
              height="100px"
              controls
            />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
