import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Pages/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
