import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen max-w-screen-2xl mx-auto font-primary ">
    <Outlet/>
    </main>
   
   <Footer/>
    
    </>
  )
}
// 53