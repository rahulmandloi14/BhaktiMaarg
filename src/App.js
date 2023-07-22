// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/About';


// import Blogs from './pages/Blogs';
// import SignUp from './pages/Signup';

// function App() {
// return (
// 	<Router>
// 	<Navbar />
 
// 	<Routes>
// 		<Route path='/' element= {<Home/>} />
// 		<Route path='/about' element={<About/>} />

// 		<Route path='/blogs' element={<Blogs/>} />
// 		<Route path='/sign-up' element={<SignUp/>} />
// 	</Routes>
// 	</Router>
// );
// }

// export default App;


import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Content from './components/Content/index';
import About from './pages/About';
import Blogs from './pages/Blogs';



function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Content/>} />
      <Route path='/about' element={<About/>} />
       <Route path='/blogs' element={<Blogs/>} />
   
    </Routes>
   
  </Router>
  );
}

export default App;