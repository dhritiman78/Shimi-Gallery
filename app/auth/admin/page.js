"use client"
import React, { useState } from 'react'
import MainNavbar from '@/components/MainNavbar';
import Footerbar from '@/components/Footerbar'
import { useRouter } from "next/navigation";
import './admin.css'
import Cookies from "js-cookie";
const AdminLoginForm = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isError, setError] = useState(false);
  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('./admin/login',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(password),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.message == "Logged In!") {
          setError(false);
          Cookies.set("isLoggedIn","true",{expires: 1})
          router.push('/admin/dashboard') 
        } else {
          setError(true);
        }
      }
    } catch (error) {
      alert("An error occured. Please try again later.")
    }
  }
  return (
    <div className="login-container">
      <div className='headText'>
        <h1>Admin Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label style={{ color: isError ? "red" : "inherit" }} htmlFor="password">Enter the Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: isError ? "1px solid red" : "1px solid var(--input-border-color)" }}
          />
          {isError && <p style={{color: "red"}}>** Incorrect Password!</p>}
        </div>
        <button type="submit" className="login-button">Login</button>
        <div style={{margin: "10px auto"}}>
          <a href={"./admin/verify-otp"}>Forgot Password</a>
        </div>
      </form>
    </div>
  );
};

const pages = () => {
  return (
    <>
    <MainNavbar items={<AdminLoginForm />}/>
    <Footerbar />
    </>
  )
}

export default pages