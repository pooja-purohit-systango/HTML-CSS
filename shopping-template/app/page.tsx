import { Footer } from "@/componentss/Footer";
import Header from "@/componentss/Header";
import Hero from "@/componentss/Hero";
import Popular from "@/componentss/Popular";
import Section2 from "@/componentss/Section2";
import Subscribe from "@/componentss/Subscribe";
import { Testimonials } from "@/componentss/Testimonials";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
   <Section2/>
   <Popular/>
   <Testimonials/>
 
   <Footer/>
    </>
  );
}
