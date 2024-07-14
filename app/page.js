import Footerbar from "@/components/Footerbar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar items={<div class="home">
            <p>Hello and welcome! Sharmin Sultana is passionate about bringing art to life through digital mediums and canvas paintings. As a student and an admirer of art, she finds inspiration in the interplay of colors, forms, and emotions that art evokes.</p>
        </div>}/>
    <Footerbar />
    </>
  );
}
