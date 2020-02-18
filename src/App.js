import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json.js";
import "./App.css";


class App extends React.Component {


  state = {
    friends: friends
  };

  removefriend = id => {
    console.log(id);
    const friends = this.state.friends.filter(friends => friends.id !== id);
    this.setState({ friends: friends });

  }

  render() {

    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {
          this.state.friends.map((f) => (
            <FriendCard
              key={f.id}
              name={f.name}
              image={f.image}
              occupation={f.occupation}
              location={f.location}
              removefriend={this.removefriend}
              id={f.id}
            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;
