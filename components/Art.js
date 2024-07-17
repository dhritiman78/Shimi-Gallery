"use client"
import React, { useEffect, useState } from 'react'

const Art = () => {
  const [sampleImages, setImages] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error("Error fetching data:", error))   
  }, [])

  return (
    <div className="container">
      <div id="work">
        {sampleImages.map((item, index) => 
        (
          <img key={index} src={`https://manash0606jb.github.io/Shimi-Gallery.github.io/Images/IMG%20(${item.id}).jpg`} alt="photo" />
          
        ))}
      </div>
    </div>
  )
}

export default Art
