
import Waitlist from "./Components/Waitlist";
import Areas from "./Components/Areas";
import Faq from "./Components/Faq";
import ScrollMotion from "./Components/ScrollMotion";
import ScrollImageChanger from "./Components/ScrollImageChanger";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import './App.css'

function App() {
  return (
    <div className="App">
     
  <ScrollMotion/>

  <div id="features">
  <ScrollImageChanger />
  </div>
  
  <div id="areas">
  <Areas />
  </div>
 
  <div id="faq">
  <Faq />
  </div>
 
   <div id="theWaitlist">
   <Waitlist />
   </div>

   <Footer/>

    </div>
  );
}

export default App;
