//import RegistrationForm from './Components/Registration';
//import LoginForm from './Components/login';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginForm from "./Components/login";
import RegistrationForm from './Components/Registration';
import OrganDonationForm from './Components/form';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element={<LoginForm/>}/>
      <Route path='/registration' exact element={<RegistrationForm/>}/>
      <Route path='/organdonationform' exact element={<OrganDonationForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

    //<RegistrationForm/>
    //<LoginForm/>
