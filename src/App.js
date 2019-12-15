import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <h1>User Profile</h1> }
        />
        <Route
          exact
          path="/account/profile"
          render={ () => <UserProfile /> }
        />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
