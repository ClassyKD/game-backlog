import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Forgotpw from "./components/Login/Forgotpw";
import Landing from "./components/User/landingPage";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/forgotpw" element={<Forgotpw/>}/>
          <Route path="/mygames" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
      
        </Routes>
      </BrowserRouter>
      <Footer />
      </ApolloProvider>
    </div>
  );
}
export default App;
