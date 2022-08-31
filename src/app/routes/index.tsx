import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Hello } from "../../components/Hello";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Error } from "../../components/_404";

export default function Rotas() {
    return(
       <Router>
        <ul>
            <li><Link to="/">Hello</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Hello name="matheus" idade={18}/>}/>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>

       </Router>
    );
}