import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
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
    </>
  );
}
