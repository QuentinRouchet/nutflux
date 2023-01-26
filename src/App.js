import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Nutflux</title>
      </Helmet>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route 
            exact 
            path="/account" 
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
