import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked:[],
    score:0,
  };

  sortFriends = () => {
    this.state.friends.sort( (a,b) => {return 0.5 - Math.random()});
  };

  reset = () => {
    this.setState({
      clicked:[],
      score:0,
    })
  }

// friend click event
friendClick = event => {
  console.log("you clicked")

  const currentFriend = event.target.id;
  // check to see if that friend has been clicked or not, are they in the state array or not?
  const isClicked = this.state.clicked.indexOf(currentFriend) > -1;
 

  // if is clicked, end the game, reset the score
  if (isClicked) {
    this.sortFriends();
    this.reset();
  } else {
    // we have to update the score, sort the cards
    this.sortFriends();
    this.setState({
      clicked: this.state.clicked.concat(currentFriend),
      // increase the score
      score: this.state.score + 1
    },
    //restart the game
    () => {
      if (this.state.score === 12) {
        this.sortFriends();
        this.reset();
      }
    });
  }
};





  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            friendClick ={this.friendClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
