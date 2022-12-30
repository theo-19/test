import { useMemo } from "react";

export function useData() {
  const countries = useMemo(
    () => [
      { id: "sy", title: "Syria" },
      { id: "tr", title: "Turkey" },
    ],
    []
  );
  const cities = useMemo(
    () => [
      { id: "al", title: "Aleppo", countryId: "sy" },
      { id: "dm", title: "Damascus", countryId: "sy" },
      { id: "ga", title: "Gaziantep", countryId: "tr" },
      { id: "ist", title: "Istanbul", countryId: "tr" },
    ],
    []
  );
  const terrotories = useMemo(
    () => [
      {
        id: "ha",
        title: "Hamdaniah",
        cityId: "al",
        coords: { N: 36.1775, E: 37.099 },
      },
      {
        id: "ha",
        title: "Fardous",
        cityId: "al",
        coords: { N: 36.1809, E: 37.1513 },
      },
      {
        id: "kf",
        title: "Kafarsouseh",
        cityId: "dm",
        coords: { N: 33.4844, E: 36.2685 },
      },
      {
        id: "kf",
        title: "Bab Touma",
        cityId: "dm",
        coords: { N: 33.5103, E: 36.317 },
      },
      {
        id: "ga",
        title: "Sehitkamil",
        cityId: "ga",
        coords: { N: 37.2031, E: 37.34 },
      },
      {
        id: "ga",
        title: "Sahinbey",
        cityId: "ga",
        coords: { N: 36.9907, E: 37.2116 },
      },
      {
        id: "ist",
        title: "Zeytinburnu",
        cityId: "ist",
        coords: { N: 40.9906, E: 28.8961 },
      },
      {
        id: "ist",
        title: "Beylikduzu",
        cityId: "ist",
        coords: { N: 40.991, E: 28.6498 },
      },
    ],
    []
  );

  return { countries, cities, terrotories };
}
