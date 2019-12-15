import React from "react";

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "Spenny T",
    firstName: "Spencer",
    lastName: "Thomas",
    email: "test@test.com",
    updateUser: (user) => this.updateUser(user)
    
  };

  updateUser = (user) =>{
    this.setState({...user,})
  }
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;