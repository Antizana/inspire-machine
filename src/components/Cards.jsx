import React from "react";
import { v4 as uuidv4 } from "uuid";

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.h1Title = "Inspire Machine";
    this.quoteText1 = "";
    this.quoteAuthor1 = "";
    this.card1 = <span></span>;
    this.card2 = <span></span>;
    this.cardDeck = [];

    this.buildCards = this.buildCards.bind(this);
  }

  shouldComponentUpdate() {
    return this.props.animated;
  }

  buildCards() {
    if (this.props.animated && this.h1Title !== "") {
      this.card1 = (
        <div
          key={uuidv4()}
          className="card card1 animated hinge"
          onAnimationEnd={this.props.onAnimationEnd}
        >
          <div className="pin"></div>
          <h1>{this.h1Title}</h1>
        </div>
      );
      this.h1Title = "";
      this.quoteText1 = this.props.quoteText;
      this.quoteAuthor1 = this.props.quoteAuthor;
    } else if (!this.props.animated && this.h1Title !== "") {
      this.card1 = (
        <div key={uuidv4()} className="card card1">
          <div className="pin"></div>
          <h1>
            <em>{this.h1Title}</em>
          </h1>
        </div>
      );
    } else if (!this.props.animated && this.h1Title === "") {
      this.card1 = (
        <div key={uuidv4()} className={"card card1"}>
          <div className="pin"></div>
          <p id="text" className="qtext">
            {this.quoteText1}
          </p>
          <p id="author" className="author">
            {this.quoteAuthor1}
          </p>
        </div>
      );
    } else {
      this.card1 = (
        <div
          key={uuidv4()}
          className="card card1 animated hinge"
          onAnimationEnd={this.props.onAnimationEnd}
        >
          <div className="pin"></div>
          <p id="text" className="qtext">
            {this.quoteText1}
          </p>
          <p id="author" className="author">
            {this.quoteAuthor1}
          </p>
        </div>
      );
      this.quoteText1 = this.props.quoteText;
      this.quoteAuthor1 = this.props.quoteAuthor;
    }
    this.card2 = (
      <div key={uuidv4()} className={"card card2"}>
        <div className="pin"></div>
        <p id="text2" className="qtext">
          {this.props.quoteText}
        </p>
        <p id="author2" className="author">
          {this.props.quoteAuthor}
        </p>
      </div>
    );
    this.cardDeck = [this.card2, this.card1];
  }

  render() {
    this.buildCards();

    return <div className="cards">{this.cardDeck}</div>;
  }
}

Cards.defaultProps = {
  animated: false,
  quoteText: "",
  quoteAuthor: "",
};
