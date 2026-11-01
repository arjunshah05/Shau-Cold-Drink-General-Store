import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import GoogleReviews from "./components/GoogleReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Categories/>
      <ProductSection/>
      <WhyChooseUs/>
      <Gallery/>
      <GoogleReviews/>
      <Contact/>
    </main>
    <Footer/>
    <WhatsAppButton/>
  </>;
}
