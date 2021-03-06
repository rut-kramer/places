// import BusinessDetails from './BusinessDetails.js/index.js.js';
import LogIn from './LogIn'
import { Button } from 'react-bootstrap';

import BusinessDetails from './BusinessDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import HomePage from './HomePage.js';
import { getCategory } from '../actions/Home'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ResultSearch from './ResultSearch';
import Register from './Register.js';
import ResultOfSearchList from './ResultOfSearchList'
import { searchByCategory } from '../actions/Busieness';
import YaelLogIn from './yaelLogIn';
import MapContainer from './GoogleMap'
// import YaelLogIn from './YaelLogIn'
function App(props) {
  // const [allCategories, setAllCategories] = useState()
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(getCategory())
  //   /////////////////
  // }, [dispatch]);

  return (
    <>

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/LogIn">
            <YaelLogIn/>
          </Route>
          <Route path="/ResultOfSearchList">
            <ResultOfSearchList />
          </Route>
          <Route path="/BusinessDetails">
            <BusinessDetails />
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

