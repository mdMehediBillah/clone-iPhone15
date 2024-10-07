import {
  Features,
  Footer,
  Hero,
  Highlights,
  HowItWorks,
  Model,
  Navbar,
} from "../components";

const ApplePage = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default ApplePage;
