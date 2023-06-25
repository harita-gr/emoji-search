import React, { PureComponent } from "react";
import "../styles/SearchBar.css";

export default class SearchBar extends PureComponent {
  handleText = (event) => {
    this.props.onChange(event);
  };

  render() {
    return (
      <div className="search-input">
        <div>
          <input
            className="input-text"
            placeholder="Search Emoji"
            onChange={this.handleText}
          />
        </div>
      </div>
    );
  }
}
