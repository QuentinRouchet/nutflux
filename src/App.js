import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
          <Routes>
            <Route exact path="/login" element={<LoginScreen />}/>
            <Route exact path="/" element={<HomeScreen/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
