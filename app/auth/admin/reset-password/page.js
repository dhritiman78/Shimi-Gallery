"use client"
import React, { useEffect, useState } from 'react'
import MainNavbar from '@/components/MainNavbar';
import Footerbar from '@/components/Footerbar'
import { useRouter } from "next/navigation";
import '../admin.css'
import Cookies from "js-cookie";
const ResetForm = () => {
  const router = useRouter();
  useEffect(() => {
    if(Cookies.get('isOTPVerified') != 'true'){
      router.push('/auth/admin')
    }
  },[])
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isError, setError] = useState(false);
  const handleSubmit  = async (e) => {
    e.preventDefault();
    if (password == cpassword) {
        setError(false)
        try {
            const response = await fetch('./reset-password/reset',  {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(password),
            })
            if(response.ok){
              const data = await response.json()
              if(data.message == "Successfull!"){
                if (confirm("Succesfully Done!")) {
                  Cookies.remove('isOTPVerified')
                    router.push('/auth/admin')
                } else {
                    router.push('/auth/admin')
                }
              } else {
                alert("Something went wrong")
              }
            }
          } catch (error) {
            alert("An error occured. Please try again later.")
          }
    } else {
        setError(true)
    }
    
  }
  return (
    <div className="login-container">
      <div className='headText'>
        <h1>Reset Password</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label style={{ color: isError ? "red" : "inherit" }} htmlFor="password">Enter new Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: isError ? "1px solid red" : "1px solid var(--input-border-color)" }}
          />
          {isError && <p style={{color: "red"}}>** Passwords does not match!</p>}
        </div>
        <div className="form-group">
          <label style={{ color: isError ? "red" : "inherit" }} htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Retype Password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            style={{ border: isError ? "1px solid red" : "1px solid var(--input-border-color)" }}
          />
          {isError && <p style={{color: "red"}}>** Passwords does not match!</p>}
        </div>
        <button type="submit" className="login-button">Reset</button>
      </form>
    </div>
  );
};

const pages = () => {
  return (
    <>
    <MainNavbar items={<ResetForm />}/>
    <Footerbar />
    </>
  )
}

export default pages