import React, { useCallback, useMemo, useState } from "react";
import "../../App.css";
import { useData } from "../Menus/useData";
import Select from "./Select";

export default React.memo(Menus);

function Menus() {
  const { countries, cities, terrotories } = useData();

  const [selectedCountry, setselectedCountry] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [selectedTerrotory, setSelectedTerrotory] = useState<string>();

  const onCountryItemClick = useCallback((value: string) => {
    setselectedCountry(value);
    setSelectedCity(undefined);
  }, []);

  const onCityItemClick = useCallback((value: string) => {
    setSelectedCity(value);
    setSelectedTerrotory(undefined);
  }, []);

  const onTerretoryItemClick = useCallback(
    (value: string) => setSelectedTerrotory(value),
    []
  );

  const countryCities = useMemo(
    () => cities.filter((x) => x.countryId === selectedCountry),
    [cities, selectedCountry]
  );
  const citiyTerretories = useMemo(
    () => terrotories.filter((x) => x.cityId === selectedCity),
    [selectedCity, terrotories]
  );

  return (
    <div className="drop-down-menus-container">
      <Select
        items={countries}
        selectedValue={selectedCountry}
        onItemClick={onCountryItemClick}
        placeholder="Select Country"
      />
      <Select
        items={countryCities}
        selectedValue={selectedCity}
        onItemClick={onCityItemClick}
        placeholder="Select City"
      />
      <Select
        items={citiyTerretories}
        selectedValue={selectedTerrotory}
        onItemClick={onTerretoryItemClick}
        placeholder="Select Terretory"
      />
    </div>
  );
}
