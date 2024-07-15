"use client"
import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import Footerbar from '@/components/Footerbar'
import Intro from '../editPageComponents/Intro'
import { usePathname } from 'next/navigation';
import './sectionPage.css'
import Socials from '../editPageComponents/Socials'
const page = () => {
    const pathname = usePathname();
  const section = pathname.split('/')[3];
    const RenderForms = () => {
        switch (section) {
            case 'intro':
                return (<Intro />)
                break;
            case 'socials':
                  return (<Socials />)
                  break;
          
            default:
                return (<div>Not selected</div>)
                break;
        }
    }
  return (
    <>
    <AdminNavbar items={<RenderForms />} />
    <Footerbar />
    </>
  )
}

export default page