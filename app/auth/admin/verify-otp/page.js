"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/MainNavbar';
import Footerbar from '@/components/Footerbar';
import '../admin.css'
import Cookies from 'js-cookie';

const OtpForm = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [isOtpSent,setIsOtpSent] = useState(false)
  const handleSendOtp = async () => {
    const email = 'monsoonborah@gmail.com'
    try {
      const response = await fetch('./verify-otp/send-otp',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.message == 'ok') {
          setIsOtpSent(true)
        } else {
          alert('Internal Server Error!')
        }
      } else {
        alert('Internal Server Error!')
      }
    } catch (error) {
      alert('Internal Server Error!')
    }
  }
  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('./verify-otp/verify',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otp),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.message == 'ok') {
          setError(false)
          setIsOtpSent(false)
          Cookies.set('isOTPVerified','true',{expires: 1})
          router.push('/auth/admin/reset-password');
        } else {
          setError(true)
        }
      } else {
        alert('Internal Server Error!')
      }
    } catch (error) {
      alert('Something went wrong!')
    }
  }
  return (
    <div className="login-container">
      <div className='headText'>
        <h1>OTP verification</h1>
      </div>
      {isOtpSent?(<form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label style={{ color: isError ? "red" : "inherit" }} htmlFor="password">Enter OTP sent to your email</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
            style={{ border: isError ? "1px solid red" : "1px solid var(--input-border-color)" }}
          />
          {isError && <p style={{color: "red"}}>** Invalid OTP!</p>}
        </div>
        <button type="submit" className="login-button">Verify OTP</button>
      </form>):(<div style={{display: 'flex',justifyContent: 'center', marginTop: '3px'}} className="form-group">
          <button onClick={handleSendOtp} className="login-button">Send OTP</button>

        </div> )}
    </div>
  );
};
const OtpVerification = () => {
  return (
    <>
    <MainNavbar items={<OtpForm />} />
    <Footerbar />
    </>
  );
};

export default OtpVerification;