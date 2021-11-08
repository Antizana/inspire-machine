import React, { Fragment } from "react";

export class OneCable extends React.Component {
  // props parameters:
  // animated: true - for animation, false - to clear animation
  constructor(props) {
    super(props);
    this.style = { height: 0 };
    this.circle = <Fragment></Fragment>;
  }

  render() {
    if (this.props.animated) {
      // this.l1Ref.current.style.height = "125px";
      if (this.props.widthAnimation === "0") {
        this.style = {
          height: this.props.heightAnimation,
          transition: `height ${this.props.transitionTime}s`,
        };
      } else if (this.props.heightAnimation === "0") {
        this.style = {
          width: this.props.widthAnimation,
          transition: `width ${this.props.transitionTime}s`,
        };
      }
    } else {
      this.style = {};
    }
    if (this.props.circle) {
      this.circle = (
        <circle
          id="c5"
          cx={this.props.cx}
          cy={this.props.cy}
          r={this.props.r}
          // fill="white"
        />
      );
    }
    return (
      <Fragment>
        <svg
          className={`line ${this.props.classStyleName}`}
          height={this.props.height}
          width={this.props.width}
          style={this.style}
        >
          <line
            className="cableLine"
            // x1="10"
            // y1="0"
            x1={this.props.x1}
            y1={this.props.y1}
            // x2="10"
            // y2="120"
            x2={this.props.x2}
            y2={this.props.y2}
            // style={{ stroke: "white", strokeWidth: 2 }}
          />
          {this.circle}
        </svg>
      </Fragment>
    );
  }
}

OneCable.defaultProps = {
  animated: false,
  delay: 2000,
  transitionTime: 1,
  heightAnimation: "0",
  widthAnimation: "0",
  height: "0",
  width: "0",
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  classStyleName: "",
  circle: false,
  cx: 0,
  cy: 0,
  r: 0,
};
