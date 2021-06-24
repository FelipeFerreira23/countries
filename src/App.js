import { client } from './config/client-graphql';
import { ApolloProvider } from '@apollo/client';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Country from "./components/Country";

import CountriesContextProvider from './hooks/CountriesContext';

function App() {
  return (
    <ApolloProvider client={client}>
      <CountriesContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/country/:id" component={Country} />
          </Switch>
        </BrowserRouter>
      </CountriesContextProvider>
    </ApolloProvider>
  );
}

export default App;
