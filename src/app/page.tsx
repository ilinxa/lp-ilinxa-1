import LogoTicker from "@/components/LogoTicker";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";

import Navbar from "@/sections/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
    </>
  );
}
