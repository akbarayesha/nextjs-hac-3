import Image from "next/image";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Products from "./components/Products";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Hero2 />
      <Products />
      <Slide /> 
    </div>
  );
}
