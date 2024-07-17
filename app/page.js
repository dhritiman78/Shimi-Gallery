"use client"
import Art from "@/components/Art";
import Footerbar from "@/components/Footerbar";
import MainNavbar from "@/components/MainNavbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [intro, setIntro] = useState("")
  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const response = await fetch('/admin/editPages/api/intro');
        if (response.ok) {
          const data = await response.json()
          setIntro(data.value)
        }
      } catch (error) {
        console.log("Error")
      }
    }
    fetchIntro()
  },[])
  return (
    <>
    <MainNavbar items={<div class="home">
            <p>{intro}</p>
        </div>} />
     <Art />   
    <Footerbar />
    </>
  );
}
