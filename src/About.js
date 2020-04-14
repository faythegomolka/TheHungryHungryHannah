import React, { Component } from 'react';
import './styles/About.scss';
import PhotoGrid from "./PhotoGrid.js";
import cafe from "./media/cafe_2.jpg"
import faythe from "./media/faythe_photo.jpg"
import hannah from "./media/hannah_photo.jpg"
import noam from "./media/noam.jpg"
import Modal from "./Modal.js";

class About extends Component {
  state={
    showModal: false,
    name: "",
    bio: "",
    hannahBio: "LOREM ipsum dolor sit amet, consectetur adipiscing elit. Nam eu est quam. Pellentesque sollicitudin mollis lacus nec vestibulum. In quis commodo justo. Vivamus rhoncus lacus dui, ut facilisis leo sodales eget. Nunc dictum accumsan ornare. Donec scelerisque velit sit amet tincidunt euismod. Aenean dignissim tristique orci, et convallis dui eleifend porttitor. Nullam efficitur posuere ligula, sit amet volutpat nisi accumsan vel.",
    noamBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu est quam. Pellentesque sollicitudin mollis lacus nec vestibulum. In quis commodo justo. Vivamus rhoncus lacus dui, ut facilisis leo sodales eget. Nunc dictum accumsan ornare. Donec scelerisque velit sit amet tincidunt euismod. Aenean dignissim tristique orci, et convallis dui eleifend porttitor. Nullam efficitur posuere ligula, sit amet volutpat nisi accumsan vel.",
    faytheBio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu est quam. Pellentesque sollicitudin mollis lacus nec vestibulum. In quis commodo justo. Vivamus rhoncus lacus dui, ut facilisis leo sodales eget. Nunc dictum accumsan ornare. Donec scelerisque velit sit amet tincidunt euismod. Aenean dignissim tristique orci, et convallis dui eleifend porttitor. Nullam efficitur posuere ligula, sit amet volutpat nisi accumsan vel.",
  }

  showModal = (name) => {
    let bio = name === "Faythe" ? this.state.faytheBio :
            name === "Noam" ? this.state.noamBio :
            this.state.hannahBio;
    this.setState({
      show: !this.state.show,
      name: name,
      bio: bio,
    });
  }

  render() {
    return (
        <div className="About">
          <img src={cafe} alt="slide-img" className="Image"></img>
          <h1 className="Head-text">ABOUT</h1>
          <body className="About-body">
            <h3 className="Body-header">THE HUNGRY HUNGRY HANNAH</h3>
            <p className="Body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu est quam.
            Pellentesque sollicitudin mollis lacus nec vestibulum. In quis commodo justo.
            Vivamus rhoncus lacus dui, ut facilisis leo sodales eget. Nunc dictum accumsan ornare.
            Donec scelerisque velit sit amet tincidunt euismod. Aenean dignissim tristique orci,
            et convallis dui eleifend porttitor. Nullam efficitur posuere ligula, sit amet volutpat nisi accumsan vel.
            <br/>
            <br/>
            Aenean id tempor diam. Nam tincidunt ante ut metus tincidunt,
            id suscipit risus condimentum. Phasellus faucibus hendrerit quam, a tempus nisl.
            Morbi mollis tortor ac metus auctor ultrices. Sed mauris mi, porttitor vel ultrices id, maximus et felis.
            Aliquam cursus vulputate viverra. Curabitur vel dolor sit amet ligula maximus rhoncus id a tortor.
            Vestibulum consectetur ac dolor vel scelerisque. In hac habitasse platea dictumst.
            In vitae molestie eros. Quisque luctus posuere magna et varius.
            </p>
          </body>
          <body className="Team-body">
            <h3 className="Team-header">MEET THE TEAM</h3>
            <Modal head={this.state.name} body={this.state.bio}
                  onClose={this.showModal} show={this.state.show}/>
            <div className="Photo-container">
              <div className="Founder-container">
                <button id="button" onClick={() => this.showModal("Faythe")}>
                  <img src={faythe} alt="founder" className="Founder-image"></img>
                  <p className="Founder-text">FAYTHE</p>
                </button>
              </div>
              <div className="Founder-container">
                <button id="button" onClick={() => this.showModal("Hannah")}>
                  <img src={hannah} alt="founder" className="Founder-image"></img>
                  <p className="Founder-text">HANNAH</p>
                </button>
              </div>
              <div className="Founder-container">
                <button id="button" onClick={() => this.showModal("Noam")}>
                  <img src={noam} alt="founder" className="Founder-image"></img>
                  <p className="Founder-text">NOAM</p>
                </button>
              </div>
            </div>
          </body>
          <PhotoGrid/>
        </div>
    );
  }
}

export default About;
