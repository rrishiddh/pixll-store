import Banner from "@/components/Banner";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import ProductMarquee from "@/components/ProductMarquee";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductMarquee></ProductMarquee>
      {/* service section  */}
      <Service></Service>
      {/* our work section  */}
      <OurWork></OurWork>
      {/* Featured Insight section  */}
      <Insights></Insights>
    </>
  );
}
