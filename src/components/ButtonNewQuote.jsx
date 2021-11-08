import React from "react";
import { Fragment } from "react";

export class ButtonNewQuote extends React.Component {
  render() {
    return (
      <Fragment>
        <button
          id="new-quote"
          className={`buttonNewQuote ${this.props.disabled}`}
          onClick={this.props.onClick}
          disabled={this.props.disabled === "disabled"}
        >
          Inspire Me
        </button>
      </Fragment>
    );
  }
}

ButtonNewQuote.defaultProps = {
  onClick: null,
  disabled: "",
};
