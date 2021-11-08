import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";

import { Machine } from "./components/Machine";
import { ButtonNewQuote } from "./components/ButtonNewQuote";
import { LightBulb } from "./components/LightBulb";
import { OneCable } from "./components/OneCable";
import { Stopper } from "./components/Stopper";
import { Cards } from "./components/Cards";
import { Twitt } from "./components/Twitt";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      animateCable1: false,
      animateMachine: false,
      animateCable2: false,
      animateBulb: false,
      animateStopper: false,
      animateCard: false,
    };
    this.transitionTime1 = 1;
    this.transitionTime2 = 1.5;
    this.disabled = "";
    this.quoteText = "";
    this.quoteAuthor = "";

    this.clickButton = this.clickButton.bind(this);
    this.reset = this.reset.bind(this);
    this.retriveQuote = this.retriveQuote.bind(this);
    this.randomInRange = this.randomInRange.bind(this);
    this.randomQuote = this.randomQuote.bind(this);

    // this.doRandomQuote = setInterval(this.retriveQuote, this.randomInRange(18000, 30000));
    this.doRandomQuote = setInterval(
      this.randomQuote,
      this.randomInRange(30000, 120000)
    );
  }

  retriveQuote() {
    let url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&jsonp=?";
    let urldbGet = "https://quote-api-delta.vercel.app/";
    let urldbPost = "https://quote-api-delta.vercel.app/quote/";
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            try {
              (async () => {
                await fetch(urldbGet, {
                  method: "GET",
                  headers: headers,
                }).then((dbResponse) => {
                  if (dbResponse.ok) {
                    return dbResponse.json();
                  } else {
                    throw dbResponse;
                  }
                });
              })();
            } catch (e) {
              console.error(e);
            }
          }
        })
        .then((data) => {
          this.quoteText = data.quoteText;
          if (data.quoteAuthor === "") {
            data.quoteAuthor = "Unknown";
          }
          this.quoteAuthor = data.quoteAuthor;
          try {
            (async () => {
              const rawResponse = await fetch(urldbPost, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                  quoteText: data.quoteText,
                  quoteAuthor: data.quoteAuthor,
                }),
              });
              await rawResponse.json();
            })();
          } catch (e) {
            console.error(e);
          }
        });
    } catch (e) {
      console.error(e);
    }
  }

  randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomQuote() {
    this.clickButton();
    clearInterval(this.doRandomQuote);
    this.doRandomQuote = setInterval(
      this.randomQuote,
      this.randomInRange(30000, 120000)
    );
  }

  clickButton() {
    this.retriveQuote();
    this.disabled = "disabled";
    this.setState({ animateCable1: true });
    setTimeout(() => {
      this.setState({ animateMachine: true });
      setTimeout(() => {
        this.setState({ animateCable2: true });
        setTimeout(() => {
          this.setState({ animateBulb: true });
          setTimeout(() => {
            this.setState({ animateStopper: true, animateCard: true });
            setTimeout(() => {
              this.setState({ animateStopper: false });
            }, 350);
          }, 800);
        }, 400);
      }, 1500);
    }, 800);
  }

  reset() {
    this.disabled = "";
    this.setState({
      animateBulb: false,
      animateCable1: false,
      animateCable2: false,
      animateMachine: false,
      animateCard: false,
    });
  }

  render() {
    this.retriveQuote();
    return (
      <div id="quote-box" className="container">
        <Machine animated={this.state.animateMachine} />
        <FontAwesomeIcon
          className="faIcon"
          icon={faBatteryFull}
          size="2x"
          inverse
        />
        <ButtonNewQuote onClick={this.clickButton} disabled={this.disabled} />
        <LightBulb animated={this.state.animateBulb} />
        <div>
          <OneCable
            animated={this.state.animateCable1}
            transitionTime={this.transitionTime1}
            height="0"
            // width="20"
            width="1.46vmax"
            heightAnimation="9.15vmax"
            widthAnimation="0"
            x1="0.73vmax"
            y1="0"
            x2="0.73vmax"
            y2="8.78vmax"
            classStyleName="l1"
          />

          <OneCable
            animated={this.state.animateCable2}
            transitionTime={this.transitionTime2}
            height="1.46vmax"
            width="0"
            heightAnimation="0"
            widthAnimation="25.62vmax"
            x1="0.73vmax"
            y1="0.73vmax"
            x2="25.62vmax"
            y2="0.73vmax"
            classStyleName="l2"
            circle={true}
            cx="24.89vmax"
            cy="0.73vmax"
            r=".71vmax"
          />
          <Stopper animated={this.state.animateStopper} />
        </div>
        <Cards
          animated={this.state.animateCard}
          onAnimationEnd={() => this.reset()}
          quoteText={this.quoteText}
          quoteAuthor={this.quoteAuthor}
        />
        <Twitt Text={`${this.quoteText} - (${this.quoteAuthor})`} />
      </div>
    );
  }
}
