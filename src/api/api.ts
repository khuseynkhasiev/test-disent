const BASE_URL = "https://restcountries.com/v3.1";

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
};

const getCountriesAll = () => {
    return fetch(`${BASE_URL}/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => getResponse(res));
};

export { getCountriesAll };
