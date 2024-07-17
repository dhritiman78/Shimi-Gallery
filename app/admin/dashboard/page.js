import AdminNavbar from '@/components/AdminNavbar'
import Footerbar from '@/components/Footerbar'
import React from 'react'
import '../editPages/cards.css'
const Cards = () => {
  const cardItems = [
    { head: 'Edit Pages', pageLink: '/admin/editPages' },
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
    <AdminNavbar items={<Cards />} />
    <Footerbar />
    </>
  )
}

export default page