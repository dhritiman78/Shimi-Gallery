"use client"
import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'

const Intro = () => {
  const [intro, setIntro] = useState("");

  useEffect(() => {
    const fetchIntro = async () => {
      try {
       const response = await fetch('/admin/editPages/api/intro');
       if (response.ok) {
        const data = await response.json();
        setIntro(data.value);
      }
      } catch (error) {
        console.error("Failed to fetch introduction paragraph", error);
      }
    }
    fetchIntro()
  }, [])
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/admin/editPages/api/intro', {
        method: 'POST',
        headers :{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ intro }),
          })
          if (res.ok) {
            const result = await res.json()
            alert(result.message)
          }
    } catch (error) {
      alert("Something went wrong");
    }
  }
    return (
      <div className='container'>
        <div className='header'>
          <h1>Introduction</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="text">Introduction Paragraph</label>
            <textarea id="text" name="text" value={intro} onChange={(e) => setIntro(e.target.value)}></textarea>
          </div>
          <div className='button'>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
  
export default Intro