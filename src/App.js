import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Pages/home";
import Login from "./Pages/login";
import Profile from "./Pages/profile";
import TicketPurchase from "./Pages/ticketPurchase";
import Logout from "./Pages/logout";
import Landing from "./Pages/landing";
import Terms from "./Pages/terms";
import TicketPurchase1 from "./Pages/ticket1";
import Step3 from "./Pages/step3";
import Step4 from "./Pages/step4";
import Step5 from "./Pages/step5";
import Step6 from "./Pages/step6";
import Roombooking from "./Pages/roomBooking";
import Cart from "./Pages/cart";
import UpdatePassword from "./Pages/updatePassword";
import ForgetPassword from "./Pages/frogetPassword";
import Preview from "./Pages/preview";
function App() {
  return (
      <div className="App">
          <div className='loader d-flex align-items-center justify-content-center'>
              <img src="assets/img/logo/preloader.png" alt="FrogBID" style={{width:"200px", height:"auto"}}/>
          </div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/Register' element={<Home/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Profile' element={<Profile/>}/>
                  <Route path='/Ticket' element={<TicketPurchase/>}/>
                  <Route path='/Second-Step' element={<TicketPurchase1/>}/>
                  <Route path='/Third-Step' element={<Step3/>}/>
                  <Route path='/Fourth-Step' element={<Step4/>}/>
                  <Route path='/Fifth-Step' element={<Step5/>}/>
                  <Route path='/Sixth-Step' element={<Step6/>}/>
                  <Route path='/Terms' element={<Terms/>}/>
                  <Route path='/Accommodation' element={<Roombooking/>}/>
                  <Route path='/Cart' element={<Cart/>}/>
                  <Route path='/Update-Password' element={<UpdatePassword/>}/>
                  <Route path='/Forget-Password' element={<ForgetPassword/>}/>
                  <Route path='/Preview' element={<Preview/>}/>
                  <Route path='/Logout' element={<Logout/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
