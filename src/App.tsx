import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Stepper from "./components/stepper/HorizontalStepper"
import Orgstepper from "./components/stepper/orgstepper"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Orgin from "./components/mainForm/orgin/orgin";
import Orginpart from "./components/mainForm/orgin/orgainpart";
import Orginme from "./components/mainForm/orgin/orgainfas";
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/PatientApplication' element={<Stepper />} />
          <Route path='/OrganisationDetail' element={<Orgstepper />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
