"use client";

import React from "react";
import Hero from "./components/Hero";
import CompanyMapEmbed from "./components/CompanyMapEmbed";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import RealEstateGallery from "./components/RealEstateGallery";

export default function HomePage() {

  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10">
      <Hero/>
        <About />
        <Services />
        <RealEstateGallery />
        <Contact />
        <CompanyMapEmbed
            embedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.9069277982608!2d46.8463552849971!3d24.86702818405085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzAxLjMiTiA0NsKwNTAnMzkuMCJF!5e0!3m2!1sar!2ssa!4v1748968945868!5m2!1sar!2ssa"
            height="300px"
          />
      </div>
    </div>
  );
}
