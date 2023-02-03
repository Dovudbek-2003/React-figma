import MyFigma from "./figma";
import Footer from "./footer";
import Section1 from "./section1";
import Section10 from "./section10";
import Section2 from "./section2";
import Section3 from "./Section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import Statistik from "./statistik";

function App() {
  return (
    <div className="App">
    <MyFigma/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Statistik/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Footer/>
    </div>
  );
}

export default App;