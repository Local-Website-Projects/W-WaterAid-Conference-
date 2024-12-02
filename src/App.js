import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Pages/home";
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
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
