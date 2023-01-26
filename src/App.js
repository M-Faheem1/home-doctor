import './App.css'
import './style/scss/_import.scss'
import Header from './components/Header';
import OurMission from './components/OurMission';
import TrustUs from './components/TrustUs';
import MakeMoney from './components/MakeMoney';
import OurGoal from './components/OurGoal';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <div className="main">
      <OurMission/>
      <TrustUs/>
      <MakeMoney/>
      <OurGoal/>
      <ContactUs/>
    </div>
      <Footer/>
    </>
  );
}

export default App;
