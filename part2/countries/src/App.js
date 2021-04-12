import React, { useEffect, useState } from "react";
import CountryData from "./components/CountryData";
import Filter from "./components/Filter";

import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const filteredWithName = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = (country) => {
    setSearch(country.name);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <Filter onChange={handleSearchChange} search={search} />

      <CountryData
        countries={filteredWithName}
        search={search}
        onClick={onClick}
      />
    </div>
  );
};

export default App;
