import { Footer, Navbar } from "../components";
import {
  About,
  Domains,
  FounderNote,
  Hero,
  Projects,
  CodeOfConduct,
  Contributors,
  ContributorsGuide
} from "../sections";

const Home = () => (
  <div className=" bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Domains />
    </div>
    <div className="relative">
      <ContributorsGuide />
      <div className="gradient-04 z-0" />
      <CodeOfConduct />
    </div>
    <Projects />
    <div className="relative">
      <Contributors />
      {/* <div className="gradient-04 z-0" />
      <FounderNote /> */}
    </div>
    <Footer />
  </div>
);

export default Home;
