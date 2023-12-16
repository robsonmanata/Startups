import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar1 from './Components/NavigationBar/NavBar';
import WeCreate from './Components/WeCreate/WeCreate';
import WhoAreWe from './Components/WhoAreWe/WhoAreWe';
import SolvingProblems from './Components/SolvingProblems/solvingProblems';
import CoreValues from './Components/CoreValues/CoreValues';
import Works from './Components/Works/Works';
import Startups from './Components/Startups/Startups';
import Hiring from './Components/Hiring/Hiring';
import Message from './Components/Message/Message';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar1></Navbar1>
    <WeCreate></WeCreate>
    <WhoAreWe></WhoAreWe>
    <SolvingProblems></SolvingProblems>
    <CoreValues></CoreValues>
    <Works></Works>
    <Startups></Startups>
    <Hiring></Hiring>
    <Message></Message>
    <Footer></Footer>
    
    
     
    </div>
  );
}

export default App;
