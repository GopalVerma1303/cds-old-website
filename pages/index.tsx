import { Footer, Navbar } from "../components";
import CustomCursor from '../components/CustomCursor';
import {
  About,
  Domains,
  FounderNote,
  Hero,
  Projects,
  CodeOfConduct,
  Contributors,
  ContributorsGuide,
} from "../sections";


const Home = () => (
  <div className=" bg-black overflow-hidden" >
    <CustomCursor/>
    <Navbar />
    <div id ="#" ><Hero /></div>
    <div id="about" className="relative">
      <About />
      <div id="domains" className="relative" />
      <Domains />
    </div>
    <div id="contriguide" className="relative">
      <ContributorsGuide />
      <div className="gradient-04 z-0" />
    </div>
    <div id="coc" className="relative">
      <CodeOfConduct />
      <div className="gradient-04 z-0" />
    </div>
    {/* <Projects /> */}
    <div id="contributors" className="relative">
      <Contributors />
      {/* <div className="gradient-04 z-0" />
      <FounderNote /> */}
    </div>
    <div id = "contactus"><Footer /></div>
    
  </div>
);

export default Home;
