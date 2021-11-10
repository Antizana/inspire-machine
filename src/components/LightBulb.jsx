import React from "react";

export class LightBulb extends React.Component {
  constructor(props) {
    super(props);
    this.fillColor = "";
  }
  render() {
    this.fillColor = this.props.animated ? "fillYellow" : "";
    return (
      <span className="lightbulb">
        <svg
          className={`lb-head ${this.fillColor}`}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 115 122.88"
        >
          <g>
            <path d="M36.37,82.46c-2.88-3.29-5.86-6.71-8.22-11.74c-2.31-4.96-3.59-10.08-3.55-15.4c0.05-5.32,1.4-10.8,4.34-16.46 c0.02-0.04,0.04-0.07,0.06-0.11l0,0c3.85-6.52,9.24-10.88,15.24-13.32c5.03-2.06,10.5-2.76,15.86-2.27 c5.34,0.49,10.57,2.17,15.14,4.87c5.81,3.44,10.59,8.54,13.22,14.98c1.42,3.49,2.38,7.38,2.5,11.64c0.12,4.25-0.61,8.83-2.57,13.67 c-3,7.43-10.01,15.39-14.6,22.7c-0.25-0.05-0.51-0.06-0.77-0.02l-6.19,0.92l9.43-32.8c0.27-0.93-0.28-1.9-1.21-2.17 c-0.93-0.26-1.9,0.28-2.17,1.21L63.01,92.5l-9.36,1.39l-9.89-31.44c0.71,0.14,1.46-0.17,1.85-0.83l7.01-11.93l3.57,8.19 c0.39,0.89,1.42,1.29,2.3,0.91c0.44-0.19,0.76-0.55,0.93-0.96l0,0l3.16-7.98l3.7,9.76c0.34,0.91,1.35,1.36,2.26,1.02 c0.91-0.34,1.36-1.35,1.02-2.26l-5.27-13.9c-0.15-0.49-0.52-0.91-1.03-1.11c-0.9-0.36-1.92,0.09-2.28,0.99l-3.27,8.27l-3.26-7.48 c-0.14-0.33-0.39-0.62-0.72-0.81c-0.83-0.49-1.91-0.21-2.39,0.62l-8.52,14.5l-0.61-1.93c-0.29-0.92-1.27-1.44-2.19-1.15 c-0.92,0.29-1.44,1.27-1.15,2.19l11.27,35.85l-6.78,1.01C41.72,90.57,39.22,85.73,36.37,82.46L36.37,82.46z M14.26,18.49 c-0.79-0.74-1.21-1.73-1.25-2.73c-0.04-1,0.31-2.02,1.04-2.81c0.74-0.79,1.73-1.21,2.73-1.25c1-0.04,2.02,0.31,2.81,1.04l6.28,5.85 c0.79,0.74,1.21,1.73,1.25,2.73c0.04,1.01-0.31,2.02-1.04,2.81c-0.74,0.79-1.73,1.21-2.73,1.25c-1.01,0.04-2.02-0.31-2.81-1.04 L14.26,18.49L14.26,18.49z M3.99,61.66c-1.06,0.02-2.03-0.39-2.75-1.06C0.51,59.91,0.04,58.95,0,57.86 c-0.04-1.08,0.37-2.08,1.06-2.81c0.69-0.73,1.65-1.2,2.74-1.23l8.57-0.29c1.08-0.04,2.08,0.37,2.81,1.06 c0.73,0.69,1.2,1.65,1.23,2.74l0,0.06h0.01l-0.01,0.14c-0.02,1.01-0.42,1.92-1.06,2.61c-0.69,0.73-1.65,1.19-2.74,1.23l-0.06,0 v0.01l-0.09,0L3.99,61.66L3.99,61.66z M110.71,49.51l0.13-0.01c1.02-0.06,1.97,0.27,2.71,0.87c0.78,0.63,1.31,1.57,1.43,2.64 l0,0.04c0.01,0,0.01,0.11,0.01,0.13c0.06,1.02-0.27,1.97-0.87,2.71c-0.63,0.78-1.57,1.31-2.64,1.43l-8.53,0.9 c-1.08,0.11-2.1-0.23-2.87-0.86c-0.78-0.63-1.32-1.57-1.43-2.64c-0.11-1.07,0.23-2.1,0.86-2.87c0.63-0.78,1.57-1.32,2.64-1.43 C105,50.11,107.86,49.78,110.71,49.51L110.71,49.51L110.71,49.51z M93.81,15.37c0.61-0.9,1.51-1.46,2.49-1.66 c0.98-0.19,2.03-0.01,2.94,0.59l0.01,0.01c0.9,0.6,1.47,1.51,1.66,2.49c0.19,0.98,0.01,2.03-0.59,2.94l-4.77,7.13 c-0.6,0.9-1.51,1.47-2.5,1.67c-0.98,0.19-2.03,0.01-2.94-0.59c-0.9-0.6-1.47-1.52-1.67-2.5c-0.19-0.98-0.01-2.03,0.59-2.94 L93.81,15.37L93.81,15.37z M56.77,3.83c0.03-1.09,0.49-2.06,1.22-2.75c0.71-0.68,1.69-1.09,2.75-1.08l0-0.01 c0.09,0,0.18,0.01,0.27,0.02c0.99,0.08,1.88,0.53,2.52,1.2c0.68,0.71,1.09,1.68,1.08,2.75l0.01,0c0,0.07,0,0.14-0.01,0.2 l-0.21,8.37h0.01c0,0.09-0.01,0.18-0.02,0.27c-0.08,1-0.53,1.88-1.2,2.52c-0.72,0.68-1.69,1.09-2.75,1.08v0.01 c-0.09,0-0.18-0.01-0.27-0.02c-1-0.08-1.88-0.53-2.52-1.2c-0.68-0.72-1.09-1.69-1.08-2.75h-0.01c0-0.07,0-0.14,0.01-0.2L56.77,3.83 L56.77,3.83z M71.42,95.84l-0.63,2.95l-0.16,2.1l-25.33,3.77c-0.09-1.51-0.33-3.14-0.71-4.83L71.42,95.84L71.42,95.84z M70.58,105.49l0.02,1.27l0.03,0.44c0.07,0.83,0.08,1.67,0.03,2.5l-0.38,1.83l-23.53,3.5l-0.41-0.94l-0.92-3.76l-0.02-1.09 L70.58,105.49L70.58,105.49z M68.73,116.35c-1.22,2.09-2.9,3.72-4.82,4.83c-1.71,1-3.62,1.57-5.53,1.69 c-1.94,0.12-3.9-0.25-5.69-1.11c-1.22-0.6-2.36-1.43-3.37-2.51L68.73,116.35L68.73,116.35z" />
          </g>
        </svg>
      </span>
    );
  }
}

LightBulb.defaultProps = {
  animated: false,
};
