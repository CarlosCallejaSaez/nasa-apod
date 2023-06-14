import React, { useState, useEffect } from 'react';
import { Select,Box, Heading, Input, Text,Center } from '@chakra-ui/react';
import Figure from './components/Figure';

function App() {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);
  const [dataMars, setDataMars] = useState([]);
  const [api, setApi] = useState("apod");

  const NASA_API_KEY = "ss9M5D2dUzV3Ppryxhsm56x71CcG7OTQfrrwC9U4";

  const baseUrlApod = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`;
  const baseUrlMars= `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`

  useEffect(() => {
    if (api === "apod"){
    const APODFetching = async () => {
      const response = await fetch(baseUrlApod);
      const data = await response.json();
      setData(data);
    };
    APODFetching();}
    else if(api === "mars"){
      const marsFetching =async () =>{
        const response = await fetch(baseUrlMars);
      const data = await response.json();
      setDataMars(data.photos[0]);
      console.log("mars",data)
      }
      marsFetching()
  }
  }, [api,date]);

  const handleInput = (ev) => {
    setDate(ev.target.value);
  };

  return (
    <Box p={4}>
      <Select placeholder='Selecciona API'  onChange={(ev) => setApi(ev.target.value)}>
  <option value='apod'>Apod</option>
  <option value='mars'>Mars</option>
</Select>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Imagen astronómica del día
      </Heading>
      <Text mb={2} textAlign="center">Esta imagen corresponde a la fecha {date}</Text>
      <Center>
      <Input type="date" max={today} onChange={handleInput} mb={2} size="sm" textAlign="center" width="200px"/>
      </Center>

      {api==="apod" && <Figure data={data}/> }
      {api==="mars" && <Figure dataMars={dataMars} />}
      

     




      
    </Box>
  );
}

export default App;
