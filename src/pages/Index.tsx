import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import Schedule from "@/components/Schedule";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const [selectedBranch, setSelectedBranch] = useState("kenesary");

  return (
    <main className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Achievements />
      <Team />
      <Schedule selectedBranch={selectedBranch} onBranchChange={setSelectedBranch} />
      <Contacts selectedBranch={selectedBranch} onBranchChange={setSelectedBranch} />
      <Footer />
      <BottomNav />
    </main>
  );
};

export default Index;
