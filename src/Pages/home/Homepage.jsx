import React from "react";
import AboutUs from "../../components/home/aboutus/AboutUs.jsx";
import Container from "../../components/home/container/Container.jsx";
import Content from "../../components/home/content/Content.jsx";
import Footer from "../../components/home/footer/Footer.jsx";
import Index from "../../components/home/index/Index.jsx";
import Links from "../../components/home/links/Links.jsx";
import Logos from "../../components/home/logos/Logos.jsx";
import Navbar from "../../components/home/navbar/Navbar.jsx";
import Newsletter from "../../components/home/newsletter/Newsletter.jsx";
import Section from "../../components/home/sectiontitle/Section.jsx";
import Testimonial from "../../components/home/testimonial/Testimonial.jsx";
import SearchBar from "../../components/searchnavbar/SearchBar.jsx";
import Secondnavbar from "../../components/secondnavbar/Secondnavbar.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <Secondnavbar />
      <SearchBar />
      <Testimonial />
      <Logos />
      <Section />
      <Index />
      <AboutUs />
      <Content />
      <Container />
      <Links />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Homepage;
