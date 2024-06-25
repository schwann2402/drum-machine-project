import DrumKeys from "../components/DrumKeys Component"
import React from "react"
import './style.css'

class DrumMachine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      track: ""
    }
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }


  playAudio = (text, id) => {
    let sound = document.getElementById(`${text}`);
    const soundPromise = sound.play()
    if (soundPromise !== undefined) {
      soundPromise.then(_ => {
      })
      .catch(error => {
       console.log(error)
    })
  }
    this.setState({
      track: id
    })
    sound.play()
  }

  handleKeyPress = (e) => {
    switch(e.key){
      case 'q':
        this.playAudio("Q", "heater-1");
        break;
      case 'w':
        this.playAudio("W", "heater-2");
        break;
      case 'e':
        this.playAudio("E", "heater-3");
        break;
      case 'a':
        this.playAudio("A", "heater-4");
        break;
      case 's':
        this.playAudio("S", "clap");
        break;
      case 'd':
        this.playAudio("D", "open-hh");
      break;
      case 'z':
        this.playAudio("Z", "kick-n'-hat");
        break;
      case 'x':
        this.playAudio("X", "kick");
        break;
      case 'c':
        this.playAudio("C", "close-hh");
        break;
      default: return
    }
  }

  render() {
    return (
    <div id={this.props.id}>
      <div id="display">
        <h1>Drum Machine!</h1>
        <DrumKeys className="drum-pad" id="heater-1" playAudio={this.playAudio} text="Q" audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"/>
        <DrumKeys className="drum-pad" id="heater-2" playAudio={this.playAudio} text="W" audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"/>
        <DrumKeys className="drum-pad" id="heater-3" playAudio={this.playAudio} text="E" audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"/>
        <DrumKeys className="drum-pad" id="heater-4" playAudio={this.playAudio} text="A" audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"/>
        <DrumKeys className="drum-pad" id="clap" text="S" playAudio={this.playAudio} audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"/>
        <DrumKeys className="drum-pad" id="open-hh" text="D" playAudio={this.playAudio} audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"/>
        <DrumKeys className="drum-pad" id="kick-n'-hat" text="Z" playAudio={this.playAudio} audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"/>
        <DrumKeys className="drum-pad" id="kick" text="X" playAudio={this.playAudio} audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" />
        <DrumKeys className="drum-pad" id="close-hh" text="C" playAudio={this.playAudio} audio="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"/>
        <p id="sound-pressed">{this.state.track}</p>
      </div>
    </div>
    )
  }
}

export default DrumMachine