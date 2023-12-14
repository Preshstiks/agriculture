import Activity from "@/components/Activity";
import Body1 from "@/components/Body1";
import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <div className="select-none">
      <Hero />
      <Body1 />
      <Activity />
      <WhatToExpect />
      <WhyChooseUs />
    </div>
  );
}
