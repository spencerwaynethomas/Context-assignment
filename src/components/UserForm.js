import React from "react"
import { Form, } from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider"

class UserForm extends React.Component {
  state = { firstName: "", lastName: "", }


  render() {
    return (
      <div> user form</div>
    )
  }

}


export default UserForm