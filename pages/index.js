import Activity from "@/components/Activity";
import Body1 from "@/components/Body1";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WhatToExpect from "@/components/WhatToExpect";
export default function Home() {
  return (
    <div className="select-none">
      <Hero />
      <Body1 />
      <Activity />
      <WhatToExpect />
      <Testimonials />
    </div>
  );
}
