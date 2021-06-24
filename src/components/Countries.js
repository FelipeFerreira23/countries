import { Link } from "react-router-dom";

import { useCountriesContext } from '../hooks/CountriesContext';

const Countries = (props) => {
  const { countries } = useCountriesContext();

  if(countries.loading) return <div className="loading">Carregando...</div>

  return (
    <div className="countries">
      {countries.itens.map((country) => (
        <div key={country.name} className="country">
          <img src={country.flag.svgFile} width="100" />
          <h2>{country.name}</h2>
          <h3>{country.capital}</h3>
          <Link to={{ 
            pathname: `/country/${country._id}`,
            state: { country: country.name }
          }}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
}

export default Countries;
