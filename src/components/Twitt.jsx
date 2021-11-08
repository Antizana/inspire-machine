import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export function Twitt(props) {
  let tweet = `https://twitter.com/intent/tweet?${props.Text}`;
  return (
    <div>
      <a
        id="tweet-quote"
        href={tweet}
        rel="noreferrer noopener"
        target="_blank"
      >
        <FontAwesomeIcon className="twitt" icon={faTwitter} size="2x" inverse />
      </a>
    </div>
  );
}

Twitt.defaultProps = {
  Text: "",
};
