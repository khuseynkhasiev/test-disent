import React from "react";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ICountry } from "../../interfaces/data";
import Capitals from "../../components/Capitals/Capitals.tsx";
import "./countryDetails.css";

export default function CountryDetails() {
    const location = useLocation();
    const country: ICountry = location.state;
    const { name, region, flags, population, capital, startOfWeek, subregion } =
        country;
    return (
        <div className="countryDetails">
            <h3>Name: {name.official}</h3>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Start of week: {startOfWeek}</p>
            <p>Population: {population}</p>
            <Capitals capitals={capital} />
            <Link className="countryDetails__back" to="/">
                <Button variant="contained" color="success">
                    Back
                </Button>
            </Link>
        </div>
    );
}
