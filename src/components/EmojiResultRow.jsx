import React, { PureComponent } from "react";
import Clipboard from "clipboard";
import "../styles/EmojiResultRow.css";

export default class EmojiResultRow extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-it");
  }
  componentDidUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { symbol, title } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-it"
        data-clipboard-text={symbol}
      >
        <img src={src} alt={title} />
        <span className="title">{title}</span>
        <span className="info">Click to Copy</span>
      </div>
    );
  }
}
