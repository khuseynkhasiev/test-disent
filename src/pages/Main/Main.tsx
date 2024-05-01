import React from "react";
import CountriesList from "../../components/CountriesList/CountriesList.tsx";
import "./main.css";

export default function Main() {
    return (
        <main className="main">
            <h1 className="main__title">List of countries</h1>
            <CountriesList />
        </main>
    );
}
