import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Formp from "./pages/form";
import Table from "./pages/absen";
import Formrg from "./pages/lglfrm";
import ProgramDescription from "./pages/program";
import Profile from "./pages/profile";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-emerald-300">
      <Router>
        <Routes>
          <Route path="new-learnsite/" element={<Home/>}></Route>
          <Route path="new-learnsite/form" element={<Formp />}></Route>
          <Route path="new-learnsite/absen" element={<Table />}></Route>
          <Route path="new-learnsite/lglfrm" element={<Formrg/>}></Route>
          <Route path="new-learnsite/profile" element={<Profile/>}></Route>
          <Route path="new-learnsite/program" element={<ProgramDescription/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
