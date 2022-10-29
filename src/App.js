import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import Home from './components/pages/Home'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import Offers from './components/pages/offers/Offers'
import ForgetPassword from './components/pages/forgetpassword/ForgetPassword'
import React from 'react'
import Featured from './components/Featured/Featured'
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Best from './components/Best/Best';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        
          <Route path="/" element={<><NavBar /><Hero /> <Best /><Featured /><Footer /></>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/log-in" element={<><NavBar /><Login /> </>} />
          <Route path="/sign-up" element={<><NavBar /><Signup /></>} />
          <Route path="/forget-password" element={<><NavBar /><ForgetPassword /></>} />
          <Route path="/offers" element={<><NavBar /><Offers /></>} />

        </Routes>
      </Router>
      


    </div>
  );
}

export default App;
//   <NavBar />
//<Hero />
//<Best />
//<Featured />
//<Footer />
