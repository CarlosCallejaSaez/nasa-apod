import React, { useState , useEffect }from 'react'
import axios from 'axios';
import './App.css'
import Figure from './components/Figure';

function App() {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);
  
  const NASA_API_KEY = "ss9M5D2dUzV3Ppryxhsm56x71CcG7OTQfrrwC9U4"

  
  
  const baseUrl= `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`
console.log("baseUrl: " + baseUrl)

   useEffect(() => {
    
      const APODFetching = async () => {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`
        );

        const data = await response.json();
        setData(data);
      };
      APODFetching();
   
  }, [date]);

 
  console.log("data",data)



  const handleInput = (ev) => {
   setDate(ev.target.value)
    
  };

  return (
    <>
     <h1>Imagen astronómica del día</h1>
      <p>Esta imagen corresponde con la fecha {date}</p>
      <input type="date"  max={today} onChange={handleInput} />
      <Figure title={data.title} url={data.url} explanation={data.explanation} copyright= {data.copyright} media_type={data.media_type}/>

      
    </>
  )
}

export default App
