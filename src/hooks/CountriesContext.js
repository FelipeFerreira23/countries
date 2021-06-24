import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GET_COUNTRIES } from "../config/graphql";

const MyContext = React.createContext();

export default function CountriesContextProvider({ children }) {
  const { data, loading } = useQuery(GET_COUNTRIES);

  return (
    <MyContext.Provider
      value={{
        countries: {
          itens: data ? data.Country : [],
          loading,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useCountriesContext() {
  return useContext(MyContext);
}