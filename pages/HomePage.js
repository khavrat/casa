import { Header } from "../components/header/Header.jsx";
import { Hero } from "../components/hero/Hero.jsx";
import { About } from "../components/about/About.jsx";
import { Portfolio } from "../components/portfolio/Portfolio.jsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio/>
    </>
  );
};
