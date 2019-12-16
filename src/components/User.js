import React from "react";
import { Card, } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider"

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.username }</Card.Header>
          <Card.Meta>
            First name: { value.firstName }
            <br />
            Last name: { value.lastName }
            <br />
            email: { value.email }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <h1>on some shit</h1>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)

export default User;