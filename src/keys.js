import React from "react";
import list from "./list";

class Keys extends React.Component {
  render() {
    const index = this.props.index;
    return (
      <a
        href="#"
        className="drum-pad btn btn-primary m-1"
        id={list[index].id}
        onClick={() => this.props.audioPlay(list[index].keyTrigger, index)}
      >
        {list[index].keyTrigger}
        <audio class="clip" id={list[index].keyTrigger} src={list[index].url} />
      </a>
    );
  }
}

export default Keys;
