import LogoTicker from "@/components/LogoTicker";
import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integration from "@/sections/Integration";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
      <Integration/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
