import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Country from "../Country/Country.tsx";
import * as api from "../../api/api.ts";
import { ICountry } from "../../interfaces/data.ts";
import "./countriesList.css";

export default function CountriesList() {
    const [countries, setCountries] = useState<ICountry[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);

    useEffect(() => {
        getCounties();
    }, []);

    const getCounties = () => {
        setIsError(false);
        api.getCountriesAll()
            .then((data: ICountry[]) => {
                setCountries(data);
            })
            .catch((err) => {
                console.error(err);
                setIsError(true);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <ul className="countriesList">
            {isError && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">
                        Error getting list of countries, try again later
                    </Alert>
                </Stack>
            )}

            {isLoading
                ? Array.from(new Array(3)).map(() => {
                      return (
                          <Skeleton
                              variant="rectangular"
                              sx={{ borderRadius: "4px" }}
                              width={345}
                              height={290}
                          />
                      );
                  })
                : countries?.map((country) => {
                      return (
                          <Country
                              key={country.name.official}
                              country={country}
                          />
                      );
                  })}
        </ul>
    );
}
