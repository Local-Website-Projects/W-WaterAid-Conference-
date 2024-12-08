import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Pages/home";
import Login from "./Pages/login";
import Profile from "./Pages/profile";
import TicketPurchase from "./Pages/ticketPurchase";
function App() {
  return (
      <div className="App">
          <div className='loader'>
              <div className='loader--dot'></div>
              <div className='loader--dot'></div>
              <div className='loader--dot'></div>
              <div className='loader--dot'></div>
              <div className='loader--dot'></div>
              <div className='loader--dot'></div>
              <div className='loader--text'></div>
          </div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Profile' element={<Profile/>}/>
                  <Route path='/Ticket' element={<TicketPurchase/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
