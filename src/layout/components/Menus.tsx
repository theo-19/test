import React, { useCallback, useMemo } from "react";
import "../../App.css";
import { useData } from "../Menus/useData";
import Select from "./Select";

export default React.memo(Menus);

interface Props {
  selectedData: {
    selectedCountry: string | undefined;
    selectedCity: string | undefined;
    selectedTerrotory: string | undefined;
  };
  actions: {
    onCountrySelect: (value: string | undefined) => void;
    onCitySelect: (value: string | undefined) => void;
    onTerretorySelect: (value: string | undefined) => void;
  };
}

function Menus(props: Props) {
  const { selectedData, actions } = props;
  const { countries, cities, terrotories } = useData();

  const onCountryItemClick = useCallback(
    (value: string) => {
      actions.onCountrySelect(value);
      actions.onCitySelect(undefined);
    },
    [actions]
  );

  const onCityItemClick = useCallback(
    (value: string) => {
      actions.onCitySelect(value);
      actions.onTerretorySelect(undefined);
    },
    [actions]
  );

  const onTerretoryItemClick = useCallback(
    (value: string) => actions.onTerretorySelect(value),
    [actions]
  );

  const countryCities = useMemo(
    () => cities.filter((x) => x.countryId === selectedData.selectedCountry),
    [cities, selectedData.selectedCountry]
  );
  const citiyTerretories = useMemo(
    () => terrotories.filter((x) => x.cityId === selectedData.selectedCity),
    [selectedData.selectedCity, terrotories]
  );

  return (
    <div className="drop-down-menus-container">
      <Select
        items={countries}
        selectedValue={selectedData.selectedCountry}
        onItemClick={onCountryItemClick}
        placeholder="Select Country"
      />
      <Select
        items={countryCities}
        selectedValue={selectedData.selectedCity}
        onItemClick={onCityItemClick}
        placeholder="Select City"
      />
      <Select
        items={citiyTerretories}
        selectedValue={selectedData.selectedTerrotory}
        onItemClick={onTerretoryItemClick}
        placeholder="Select Terretory"
      />
    </div>
  );
}
