import './App.css'
import './style/scss/_import.scss'
import Header from './components/Header';
import OurMission from './components/OurMission';

function App() {
  return (
    <>
    <Header/>
    <div className="main">
      <OurMission/>
    </div>
    </>
  );
}

export default App;
