import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contactus from "./Contactus";
import Welcome from "./Welcome";
import Services from "./Services";
import Servicesinfo from "./Servicesinfo";
import Contactusinfo from "./Contactusinfo";
import BlogLanding from "./BlogLanding";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Servicesinfo />
      <BlogLanding />
      <Contactusinfo />
      <Footer />
    </div>
  );
};

export default HomePage;
