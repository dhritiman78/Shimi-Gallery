"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import React ,{ useEffect } from 'react'

const Page = () => {
const router = useRouter()

  useEffect(() => {
    // Clear all cookies
    Cookies.remove('isLoggedIn') 
    // Redirect to /auth/admin
    router.push('/auth/admin')
  }, [router])
  return (
    <div></div>
  )
}

export default Page