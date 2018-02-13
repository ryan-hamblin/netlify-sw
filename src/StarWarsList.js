import React, { Component } from 'react';

class StarWarsList extends Component {
  constructor() {
    super();
    this.state = {
      starWarsChars: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(res => {
        return res.json();
      })
      .then(chars => {
        const starWarsChars = chars.results;
        this.setState({
          starWarsChars
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul>
        {this.state.starWarsChars.map(char => {
          return <li key={char.url}>{char.name}</li>;
        })}
      </ul>
    );
  }
}

export default StarWarsList;
