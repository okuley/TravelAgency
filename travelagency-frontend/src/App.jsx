import React from "react";
import Navbar from "./components/navbar.jsx";
//import Footer from "./components/footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index.jsx";
import Admin from "./pages/admin.jsx";



function App() {
  

  return (
    <>
    
      <Router>
      { <Navbar/> }
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route  path="/admin" element={<Admin />} />
      </Routes>

      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App

