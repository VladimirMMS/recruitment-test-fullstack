import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from './publicRoute'
import PrivateRoute from './privateRoute'
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export function Router() {
    const {isUserLogin} = useContext(userContext)
    return (
        <BrowserRouter>
              <Routes>
                  <Route element={<PublicRoute  isUserLogin={isUserLogin}/>} >
                    <Route path='/login' element={<Login />} />
                  </Route>
                <Route element={<PrivateRoute  isUserLogin={isUserLogin}/>}>
                  <Route path="/" element={<Home />} />
                </Route>
              </Routes>
        </BrowserRouter>
  
    );
  }
  
  export default Router;