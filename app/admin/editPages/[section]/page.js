"use client"
import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import Footerbar from '@/components/Footerbar'
import Intro from '../editPageComponents/Intro'
import { usePathname } from 'next/navigation';
import './sectionPage.css'
import Socials from '../editPageComponents/Socials'

const RenderForms = () => {
  const pathname = usePathname();
  const section = pathname.split('/')[3];
  switch (section) {
      case 'intro':
          return (<Intro />)
      case 'socials':
            return (<Socials />)
    
      default:
          return (<div>Not selected</div>)
  }
}
const page = () => {
  return (
    <>
    <AdminNavbar items={<RenderForms />} />
    <Footerbar />
    </>
  )
}

export default page