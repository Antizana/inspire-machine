import React, { Fragment } from "react";

export class Cable extends React.Component {
  // props parameters:
  // animated: true - for animation, false - to clear animation
  // delay = delay between first line animation and second one
  constructor(props) {
    super(props);
    this.l1Height = 0;
    this.l2Width = 0;
    this.wait = 0;
    this.l1Ref = React.createRef();
    this.l2Ref = React.createRef();
  }

  // Do animation
  componentDidUpdate() {
    if (this.props.animated) {
      setTimeout(() => {
        // this.l1Ref.current.style.height = "125px";
        this.l1Ref.current.style.height = "9.15vmax";
        this.l1Ref.current.style.transition = `height ${this.props.transitionTime1}s`;
        setTimeout(() => {
          // this.l2Ref.current.style.width = "350px";
          this.l2Ref.current.style.width = "25.62vmax";
          this.l2Ref.current.style.transition = `width ${this.props.transitionTime2}s`;
        }, this.props.delay);
      }, this.wait);
    } else {
      this.l1Ref.current.style.height = "0px";
      this.l1Ref.current.style.transition = "";
      this.l2Ref.current.style.width = "0px";
      this.l2Ref.current.style.transition = "";
    }
  }

  shouldComponentUpdate() {
    if (!this.props.animated) {
      this.l2Ref.current.style.width = "0px";
      this.l2Ref.current.style.transition = "";
    }
    return true;
  }

  render() {
    return (
      <Fragment>
        <svg
          ref={this.l1Ref}
          className="line l1"
          height={this.l1Height}
          // width="20"
          width="1.46vmax"
          style={{ height: 0 }}
        >
          <line
            // x1="10"
            // y1="0"
            x1="0.73vmax"
            y1="0"
            // x2="10"
            // y2="120"
            x2="0.73vmax"
            y2="8.78vmax"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
        </svg>
        <svg
          ref={this.l2Ref}
          className="line l2"
          height="1.46vmax"
          width={this.l2Width}
          style={{ width: 0 }}
        >
          <line
            // x1="10"
            // y1="10"
            x1="0.73vmax"
            y1="0.73vmax"
            // x2="350"
            // y2="10"
            x2="25.62vmax"
            y2="0.73vmax"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          {/* <circle id="c5" cx="340" cy="10" r="7" fill="white" /> */}
          <circle
            id="c5"
            cx="24.89vmax"
            cy="0.73vmax"
            r=".71vmax"
            fill="white"
          />
        </svg>
      </Fragment>
    );
  }
}

Cable.defaultProps = {
  animated: false,
  delay: 2000,
  transitionTime1: 1,
  transitionTime2: 1.5,
};
