import React from "react";
import list from "./list";
import Keys from "./keys";

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hola!",
    };
    this.audioPlay = this.audioPlay.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  audioPlay(id, index) {
    document.getElementById(id).play();
    this.setState({
      name: list[index].id,
    });
  }

  handleKeyDown(e) {
    for (let i of list) {
      if (i.keyCode === e.keyCode) {
        this.audioPlay(i.keyTrigger, list.indexOf(i));
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="container">
        <div id="drum-machine" className="border rounder row">
          <div className="col pads">
            <div className="row">
              <Keys index={0} audioPlay={this.audioPlay} />
              <Keys index={1} audioPlay={this.audioPlay} />
              <Keys index={2} audioPlay={this.audioPlay} />
            </div>
            <div className="row">
              <Keys index={3} audioPlay={this.audioPlay} />
              <Keys index={4} audioPlay={this.audioPlay} />
              <Keys index={5} audioPlay={this.audioPlay} />
            </div>
            <div className="row">
              <Keys index={6} audioPlay={this.audioPlay} />
              <Keys index={7} audioPlay={this.audioPlay} />
              <Keys index={8} audioPlay={this.audioPlay} />
            </div>
          </div>
          <div id="display" className="border rounded col">
            {this.state.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Drum;
