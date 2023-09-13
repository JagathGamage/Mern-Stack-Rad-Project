import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Header from './components/Header';

import {BrowserRouter as Router , Routes,Route,useRoutes} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddTransporter from './components/transporter/AddTransporter';
import UpdateTransporter from './components/transporter/UpdateTransporter';
import DeleteTransporter from './components/transporter/DeleteTransporter';
import AllTransporter from './components/transporter/AllTransporter';

function App() {

  return(
    <Router>
      <Header/>
      <Routes>
          <Route path='/'  element={<Signup/>}></Route>
          <Route path='/login'  element={<Login/>}></Route>
          <Route path='/home'  element={<Home/>}></Route>
          <Route path="/add"  exact element={<AddTransporter />} />
        
        
        
        <Route path="/update/:id"  exact element={<UpdateTransporter />} />
        <Route path="/delete/:id"  exact element={<DeleteTransporter />} />
        <Route path="/transporter"  exact element={<AllTransporter />} />
       
      </Routes>
    </Router>
  );
  
}

export default App;
