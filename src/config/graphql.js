import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    Country {
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

export const GET_COUNTRIES_SEARCH = gql`
  query GetCountriesSearch($name: String!) {
    Country (name: $name) {
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