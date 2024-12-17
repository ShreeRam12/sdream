import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Servicesinfo from "./components/Servicesinfo";
import Services from "./components/Services";
import ContactUsinfo from "./components/Contactusinfo";
import Contactus from "./components/Contactus";
import BlogLanding from "./components/BlogLanding";
import Blogs from "./components/Blogs";
import BirthdayThemes from "./components/articles/BirthdayThemes";
import PartyVenues from "./components/articles/PartyVenues";
import Budgetbirthday from "./components/articles/Budgetbirthday";
import Birthdaycakeidea from "./components/articles/Birthdaycakeidea";
import Birthdaycakeinspirations from "./components/articles/Birthdaycakeinspirations";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services-info" element={<Servicesinfo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactinfo" element={<ContactUsinfo />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/bloglanding" element={<BlogLanding />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/articles/birthdaythemes" element={<BirthdayThemes />} />
          <Route path="/articles/partyvenues" element={<PartyVenues />} />
          <Route path="/articles/budgetbirthday" element={<Budgetbirthday />} />
          <Route path="/articles/birthdaycakeideas" element={<Birthdaycakeidea />} />
          <Route path="/articles/birthdaycakeinspirations" element={<Birthdaycakeinspirations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
