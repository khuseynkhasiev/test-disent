export interface IFlags {
    png: string;
    svg: string;
    alt: string;
}

export interface ICountry {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    capital: string[];
    flags: IFlags;
    population: number;
    region: string;
    startOfWeek: string;
    subregion: string;
}
export interface ICapitals {
    capitals: string[];
}
