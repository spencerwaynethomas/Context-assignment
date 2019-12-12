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
            Date Joined: { value.dateJoined }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>on some shit</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)

export default User;