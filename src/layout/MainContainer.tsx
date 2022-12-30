import Typography from "@mui/material/Typography";
import React, { useMemo, useState } from "react";
import "../App.css";
import Map from "./components/Map";
import Menus from "./components/Menus";
import { useData } from "./Menus/useData";

export default React.memo(MainContainer);
function MainContainer() {
  const { terrotories } = useData();
  const [selectedCountry, setselectedCountry] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [selectedTerrotory, setSelectedTerrotory] = useState<string>();

  const terretory = useMemo(
    () => terrotories.find((x) => x.id === selectedTerrotory),
    [selectedTerrotory, terrotories]
  );

  return (
    <div className="main-container">
      <div className="header">
        <Typography className="page-title">
          {"This is dummy data for test purpose"}
        </Typography>
      </div>
      <Menus
        actions={{
          onCountrySelect: setselectedCountry,
          onCitySelect: setSelectedCity,
          onTerretorySelect: setSelectedTerrotory,
        }}
        selectedData={{
          selectedCity,
          selectedCountry,
          selectedTerrotory,
        }}
      />
      <Map
        selectedTerretory={{
          coordinates: terretory?.coords,
          title: terretory?.title || "Istanbul",
        }}
      />
    </div>
  );
}
