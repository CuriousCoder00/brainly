import Header from "@/components/header";
import Hero from "@/components/landing/hero";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
