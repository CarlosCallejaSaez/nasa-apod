import React, { useState, useEffect } from 'react';
import { Box, Heading, Input, Text,Center } from '@chakra-ui/react';
import Figure from './components/Figure';

function App() {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);

  const NASA_API_KEY = "ss9M5D2dUzV3Ppryxhsm56x71CcG7OTQfrrwC9U4";

  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`;

  useEffect(() => {
    const APODFetching = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setData(data);
    };
    APODFetching();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Imagen astronómica del día
      </Heading>
      <Text mb={2} textAlign="center">Esta imagen corresponde a la fecha {date}</Text>
      <Center>
      <Input type="date" max={today} onChange={handleInput} mb={2} size="sm" textAlign="center" width="200px"/>
      </Center>
      <Figure
        title={data.title}
        url={data.url}
        explanation={data.explanation}
        copyright={data.copyright}
        media_type={data.media_type}
      />
    </Box>
  );
}

export default App;
