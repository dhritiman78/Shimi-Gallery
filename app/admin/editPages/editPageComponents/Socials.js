"use client"
import React, { useEffect, useState } from 'react'

const Socials = () => {
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    linkedIn: "",
    pinterest: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/admin/editPages/api/socials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(socialLinks),
      });
      if (res.ok) {
        const result = await res.json();
        alert(result.message);
      } else {
        alert('Failed to update social links');
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    async function fetchSocials() {
      try {
        const response = await fetch('/admin/editPages/api/socials')
        if (response.ok) {
          const data = await response.json();
          setSocialLinks({
            instagram: data.instagram,
            linkedIn: data.linkedIn,
            pinterest: data.pinterest,
            email: data.email
          });
        }
      } catch (error) {
        alert('Something went wrong')
      }
    }
    fetchSocials()
  }, [])

  return (
    <div className='container'>
      <div className='header'>
        <h1>Update Social Links</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {Object.keys(socialLinks).map((key) => (
          <div className='form-group' key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === "email" ? "email" : "text"}
              id={key}
              name={key}
              value={socialLinks[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className='button'>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Socials;
