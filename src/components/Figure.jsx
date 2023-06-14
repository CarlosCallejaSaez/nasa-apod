import React from 'react'

const Figure = ({title,copyright,url,explanation,media_type}) => {
  return (
    <div><h2>{title}</h2>
    

    {media_type ==="image" && (<img src={url}></img>)}  
    {media_type ==="video" && (<iframe src={url}></iframe>)}
   
    
    <h3>© {copyright}</h3>
    <p>{explanation}</p></div>
  )
}

export default Figure