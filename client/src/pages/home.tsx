import Header from "@/components/header";
import CallToAction from "@/components/landing/call-to-action";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
