import React from "react";
import "./App.css";
import { CardList } from "./components/card-list.component";
import { Scroll } from "./components/scroll.component";
import { SearchBox } from "./components/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log("Error happened"));
  }
  
    onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="f-subheadline lh-title mv2">Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.onSearchChange}
        />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
