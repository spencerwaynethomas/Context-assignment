import React from "react"
import { Form, } from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider"

class UserForm extends React.Component {

  handleChange = (e, {name, value}) => this.setState({[name]: value, })


  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    const { username, library, } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Username"
        type="text"
        name="username"
        value={username}
        onChange={this.handleChange}
      />
      <Form.Select
          label="library"
          name="library"
          value={library}
          onChange={this.handleChange}
          options={library}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>

    )
  }

}

export default UserForm;