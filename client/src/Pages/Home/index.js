import React from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";
import Header from "../../components/Header";
import Leftsider from "./Leftsider";
import { useSelector } from "react-redux";
import Educations from "./Education";
function Index() {
  const { loading, portfoliodata } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfoliodata && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Educations />
          <Contact />
          <Footer />
          <Leftsider />
        </div>
      )}
    </div>
  );
}

export default Index;
