// src/App.jsx
import AboutSection from "./sections/About";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/Hero";
import PageBackgroundWrapper from "./components/BackgroundPatternWrapper";
import SpeakersSection from "./sections/Speaker";
import SponsorsSection from "./sections/Sponsors";
import ContactUs from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <PageBackgroundWrapper>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <SponsorsSection />
      <ContactUs />
      <Footer />
    </PageBackgroundWrapper>

  );
}

export default App;
