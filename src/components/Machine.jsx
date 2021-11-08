import React from "react";

export class Machine extends React.Component {
  constructor(props) {
    super(props);

    this.rotateRight = "";
    this.rotateLeft = "";
  }

  render() {
    this.rotateRight = this.props.animated ? "rotate-right" : "";
    this.rotateLeft = this.props.animated ? "rotate-left" : "";
    return (
      <div className="machine">
        <div
          className={`gear gear1 ${this.rotateRight} ${this.rotateLeft}`}
        ></div>
        <div
          className={`gear gear2 ${this.rotateRight} ${this.rotateLeft}`}
        ></div>
      </div>
    );
  }
}

Machine.defaultProps = {
  animated: false,
};
