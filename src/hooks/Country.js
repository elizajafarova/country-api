import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      <h1>List of Countries</h1>
      {countries.map((country) => (
        <div key={country.name}>
          {country.name} - {country.capital}
        </div>
      ))}
    </Fragment>
  );
}
