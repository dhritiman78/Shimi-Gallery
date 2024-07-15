import AdminNavbar from '@/components/AdminNavbar'
import Footerbar from '@/components/Footerbar'
import React from 'react'
import './cards.css'


const Cards = () => {
  const cardItems = [
    { head: 'Introduction Lines', pageLink: '/admin/editPages/intro' },
    { head: 'Social Media', pageLink: '/admin/editPages/socials' },
  ];

  return (
    <div className='cardContainer'>
      {cardItems.map((item, index) => (
        <div key={index} className='card'>
          <div>
            <h2>{item.head}</h2>
          </div>
          <div>
            <a href={item.pageLink}>Edit</a>
          </div>
        </div>
      ))}
    </div>
  );
};
const page = () => {
  return (
    <>
    <AdminNavbar items={<Cards />}/>
    <Footerbar />
    </>
  )
}

export default page