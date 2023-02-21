/* eslint-disable eqeqeq */
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import '../css/App.css';
import '../css/navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CommunityPage } from './screens/CommunityPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { MemberPage } from './screens/MemberPage';
import { OrdersPage } from './screens/OrdersPage';
import { RestaurantPage } from './screens/RestaurantPage';
import { Homepage } from './screens/Homepage';
import { NavbarHome } from './components/header';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarOthers } from './components/header/others';


function App() {
  const [, setPath] = useState();
  const main_path = window.location.pathname;
  
  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} /> 
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

        {/* <nav>
          <ul>
            <li>
              <Link to="/restaurant">RestaurantPage</Link>
            </li>
            <li>
              <Link to="/community">CommunityPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">HelpPage</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/">Homepage</Link>
            </li>
          </ul>
        </nav> */}


        <Switch>
          <Route path="/restaurant">
            <RestaurantPage />
          </Route>
          <Route path="/community">
            <CommunityPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <MemberPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;



function useState(): [any, any] {
  throw new Error('Function not implemented.');
}

