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
<<<<<<< HEAD
import Landing from "./components/User/landingPage";


import Header from "./components/Header";
import Logout from '.././utils/logout'

import Profile from "./components/User/profile"
import Sidebar from "./components/Sidebar/sidebar";

import Landing from "./components/User/landingPage";
import { Routes, Route } from "react-router-dom";

// page components
import Games from "./components/User/game";
import Pc from "./components/User/pc"
import Playstation from "./components/User/playstation"
import Xbox from "./components/User/xbox"
import Switch from "./components/User/switch"
import Users from "./components/User/User"


import Search from "./components/User/search";
import GameDetail from './components/User/gameInfo'

import Protect from './components/Protect';


import { isAuthenticated } from './utils/auth';
import AuthForm from './components/User/authForm';
import { useState, useEffect } from 'react';

// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user_data = isAuthenticated();
    if (user_data) setUser(user_data);
  }, []);
  return (
=======
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

>>>>>>> profile

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
