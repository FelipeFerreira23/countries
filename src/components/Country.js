import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

export const GET_COUNTRY = gql`
  query GetCountriesSearch($name: String!) {
    Country (name: $name) {
      name
      capital
      flag {
        svgFile
      }
      area
      population
      topLevelDomains {
        name
      }
    }
  }
`;

function Country(props) {
  const countrySelected = props.location.state.country;

  const { loading, error, data } = useQuery(
    GET_COUNTRY,
    { variables: { name: countrySelected } }
  );

  if (loading) return <p className="loading">Carregando...</p>;
  if (error) return <h2>ERROR: {error.message}</h2>;
  if (!data) return <h2>Não encontrado</h2>;

  return (
    <>
      <h1>Informações sobre o país!</h1>
      {data &&
        data.Country.map((item, index) => (
          <div key={index} className="country details">
            <img src={item.flag.svgFile} width="100" />
            <h3>{item.name}</h3>
            <p>Capital: {item.capital}</p>
            <p>Área: {item.area}</p>
            <p>População: {item.population}</p>
            <p>Top-level domain: {item.topLevelDomains[0].name}</p>
          </div>
        ))}
      <Link to="/">Voltar</Link>
    </>
  );
};

export default Country;