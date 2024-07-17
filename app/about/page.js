import Footerbar from '@/components/Footerbar'
import Navbar from '@/components/Navbar'
import React from 'react'
import '@/css/aboutPage.css'
const AboutInfo = () => {
    return (
        <div class="home">
            <div id ="left"></div>
            <div id="right">
                <h3>ABOUT ME</h3>
                <p>Hello! I'm Sharmin Sultana, an enthusiastic engineering student with a deep-rooted passion for digital art and various forms of painting. While my academic pursuits in engineering sharpen my analytical skills and problem-solving abilities, my heart finds solace and joy in the creative realm of digital art.</p>
                <p>Ever since I can remember, art has been an integral part of my life. My journey as an artist has been one of continuous learning and exploration. What fascinates me most about digital art is its limitless possibilities. The ability to create stunning visuals using technology and software pushes me to constantly innovate and improve my skills. I approach digital art with a meticulous eye for detail and a penchant for understanding the underlying mechanisms of digital tools. Beyond digital art, I also enjoy experimenting with traditional painting techniques. The tactile experience of mixing colors on a canvas and the therapeutic process of bringing a blank surface to life with strokes of paint are deeply fulfilling to me. Whether it's acrylics, watercolors, or mixed media, each medium offers its own challenges and rewards, contributing to my growth as an artist</p>
                <p>In my spare time, you can often find me immersed in online tutorials, honing my digital art skills, or sketching outdoors, drawing inspiration from nature and everyday life. I believe that art is not only a means of self-expression but also a powerful tool for storytelling and connecting with others on a deeper level.</p>
                <p>Join me on this journey as I navigate the exciting intersection of engineering and art, striving to make a meaningful impact through creativity and innovation.</p>
                <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 384 512" width="24px" fill="burlywood"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg></div>
                <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512" width="24px" fill="burlywood"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></div>
                <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512" width="24px" fill="burlywood"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></div>
            </div>
        </div>
    )
}
const page = () => {
  return (
    <>
    <Navbar items={<AboutInfo />} />
    <Footerbar />
    </>
  )
}

export default page