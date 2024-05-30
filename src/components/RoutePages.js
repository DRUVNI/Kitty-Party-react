import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import List from "./List";
import RegistrationForm from "./registrationForm";
export default function HomePage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Registration-form"
            element={<RegistrationForm />}
          ></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
