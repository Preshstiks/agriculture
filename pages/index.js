import Activity from "@/components/Activity";
import Body1 from "@/components/Body1";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="select-none">
      <Navbar />
      <Hero />
      <Body1 />
      <Activity />
    </div>
  );
}
