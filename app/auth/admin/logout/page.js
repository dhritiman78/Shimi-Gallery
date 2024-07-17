"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

const page = () => {
const router = useRouter()

  useEffect(() => {
    // Clear all cookies
    Cookies.remove('isLoggedIn') 
    // Redirect to /auth/admin
    router.push('/auth/admin')
  }, [router])
}

export default page