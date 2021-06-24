import { useState } from 'react';
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from '@apollo/client';

export const GET_COUNTRIES_SEARCH = gql`
  query GetCountriesSearch($name: String!) {
    Country (name: $name) {
      _id
      name
      capital
      flag {
        emoji
        emojiUnicode
        svgFile
      }
    }
  }
`;

const Search = (props) => {
  const [searchFilter, setSearchFilter] = useState('');

  const [executeSearch, { loading, data }] = useLazyQuery(
    GET_COUNTRIES_SEARCH
  );

  if (loading) return <p className="loading">Carregando...</p>;
  
  return (
    <>
      <div className="input-search">
        <span>
          <span>Encontrar país: </span>

          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            onClick={() =>
              executeSearch({
                variables: { name: searchFilter }
              })
            }
          >
            OK
          </button>
        </span>
      </div>
      <div className="countries">
      
      {data &&
        data.Country.map((item, index) => (
          <div key={index} className="country search">
            <img src={item.flag.svgFile} width="100" />
            <h2>{item.name}</h2>
            <h3>{item.capital}</h3>
            <Link to={{ 
              pathname: `/country/${item._id}`,
              state: { country: item.name }
            }}>Ver detalhes</Link>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default Search;