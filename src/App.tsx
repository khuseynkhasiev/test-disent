import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import "./App.css";
import County from "./pages/CountryDetails/CountryDetails.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:name" element={<County />} />
        </Routes>
    );
}

export default App;
