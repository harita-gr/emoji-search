import React, { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";

export default class EmojiResult extends PureComponent {
  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-results">
        {emojiData.map((emoji) => (
          <EmojiResultRow
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        ))}
      </div>
    );
  }
}
