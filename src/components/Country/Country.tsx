import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ICountry } from "../../interfaces/data.ts";
import { Link } from "react-router-dom";
import "./county.css";

export default function Country({ country }: { country: ICountry }) {
    const { name, flags } = country;

    return (
        <li className="country">
            <Link
                className="county__link"
                to={`/{name.official}`}
                state={country}
            >
                <Card sx={{ width: 345, height: 290 }}>
                    <CardActionArea sx={{ padding: "20px 5px" }}>
                        <CardMedia
                            sx={{ objectFit: "contain" }}
                            component="img"
                            height="140"
                            image={flags.png}
                            alt={flags.alt}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Name: {name.official}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </li>
    );
}
