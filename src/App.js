import { PureComponent } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmojiResult from "./components/EmojiResult";
import filter from "./utils/filter";

import "./App.css";

//Class component
export default class App extends PureComponent {
  state = {
    filteredEmojis: filter("", 20),
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: filter(event.target.value, 20),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar onChange={this.handleChange} />
        <EmojiResult emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}
