import React, { useState } from "react";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import 'bulma/css/bulma.min.css';
import '../assets/style.css'

export default function Header() {
  const [currentNav, handleNavChange] = useState("about");

  const renderNav = () => {
    if (currentNav === "About") {
      return <About />;
    }
    if (currentNav === "Portfolio") {
      return <Portfolio />;
    }
    if (currentNav === "Contact") {
      return <Contact />;
    }
    if (currentNav === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Header
        currentNav={currentNav}
        handleNavChange={handleNavChange}
      ></Header>
      <main>{renderNav(currentNav)}</main>
      <Footer></Footer>
    </>
  );
}