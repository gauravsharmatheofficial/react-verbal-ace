import "./App.css";
import About from "./Components/About";
import BlogSection from "./Components/Blog";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Stats from "./Components/Stats";
import UseCase from "./Components/UseCase";
import Video from "./Components/Video";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <UseCase />
      <About />
      <Video />
      <Stats />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
