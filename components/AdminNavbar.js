"use client"
import React, { useEffect } from 'react';

const AdminNavbar = (props) => {
  useEffect(() => {
    const openSidebar = () => {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.display = 'flex';
    };

    const closeSidebar = () => {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.display = 'none';
    };

    document.getElementById('navbtn').addEventListener('click', openSidebar);
    document.getElementById('closebtn').addEventListener('click', closeSidebar);

    return () => {
      document.getElementById('navbtn').removeEventListener('click', openSidebar);
      document.getElementById('closebtn').removeEventListener('click', closeSidebar);
    };
  }, []);

  const menuItems = [
    { pageLink: '/admin/editPages', text: 'EDIT PAGES' },
    { pageLink: '/auth/admin/logout', text: 'LOGOUT' },
  ];

  return (
    <header id="main_front">
      <nav>
        <div className="name">
          <h2>Shimi's Gallery</h2>
        </div>
        <div id="sidebar" style={{ display: 'none' }}>
          <button className="closebtn" id="closebtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 512 512" width="32px" fill="black">
              <path d="M256 0c-141.384 0-256 114.616-256 256s114.616 256 256 256 256-114.616 256-256-114.616-256-256-256zm121.922 320.078c4.686 4.686 4.686 12.284 0 16.971-4.686 4.686-12.284 4.686-16.971 0l-105.951-105.951-105.951 105.951c-4.686 4.686-12.284 4.686-16.971 0-4.686-4.686-4.686-12.284 0-16.971l105.951-105.951-105.951-105.951c-4.686-4.686-4.686-12.284 0-16.971 4.686-4.686 12.284-4.686 16.971 0l105.951 105.951 105.951-105.951c4.686-4.686 12.284-4.686 16.971 0 4.686 4.686 4.686 12.284 0 16.971l-105.951 105.951 105.951 105.951z"/>
            </svg>
          </button>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.pageLink}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="main_nav">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.pageLink}>{item.text}</a>
            </li>
          ))}
        </ul>
        <button className="navbtn" id="navbtn">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#e8eaed">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </nav>
      {props.items}
    </header>
  );
};

export default AdminNavbar;
