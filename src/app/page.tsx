import CalltoAction from "./Components/CalltoAction/page";
import Faqs from "./Components/Faqs/page";
import Footer from "./Components/Footer/page";
import Hero from "./Components/Hero/page";
import Intro from "./Components/Intro/page";
import Logo from "./Components/LogoPicker/page";
import Navbar from "./Components/Navbar/page";
import Services from "./Components/Services/page";
import Stack from "./Components/Stack/page";

export default function Home() {
  return (
   <>
   <div className="w-full">
   <Navbar/>
   <Hero/>
   <Logo/>
   <Intro/>
   <Services/>
   <Stack/>
   <Faqs/>
   <CalltoAction/>
   <Footer/>
   </div>
   </>
  );
}
