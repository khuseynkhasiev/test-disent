import React from "react";
import Capital from "../Capital/Capital.tsx";
import { ICapitals } from "../../interfaces/data.ts";
import "./capitals.css";

export default function Capitals({ capitals }: ICapitals) {
    return (
        <ul className="capitals">
            {capitals?.map((item) => (
                <Capital capital={item} key={item} />
            ))}
        </ul>
    );
}
