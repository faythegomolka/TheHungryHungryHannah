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
    hannahBio: "Hannah Fields, founder and head chef of The Hungry Hungry Hannah, was born and raised in Sharon, MA. After graduating from The University of Maryland (Go Terps!) in 2021, Hannah recruited Noam and Faythe to help her open The Hungry Hungry Hannah Cafe in their home town. When she's not at the cafe, catch Hannah running a half marathon, watching Grey's Anatomy, or eating one of her famous bowls of oats.",
    noamBio: "Noam Levy, also born and raised in Sharon, MA, put her great eye for design to good use while opening The Hungry Hungry Hannah. With her natural artistic abilities and skill for graphic design, Noam was able to craft everything from the cafe's menu to its beautiful interior. In her free time, Noam can be found learning TikTok dances, doodling, or arguing with her best friend, Sabrina Barron.",
    faytheBio: "Faythe Gomolka, the tech head of the cafe, put her business and computer science degree to use to help Hannah open The Hungry Hungry Hannah. After developing the cafe's website, Faythe continues to manage all of the technology for the restaurant, as well as other business operations. Aside from coding, Faythe also loves to travel and spend time outdoors.",
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
            After graduation from the University of Maryland in 2021 with a Bachelor of Science
            in kinesiology, Hannah Fields decided to pursue her passions for nutrition, cooking,
            and food. Using the valuable experience and leveraging her loyal fans from her popular
            food Instagram account, @thehungryhungryhannah, Fields embarked on what she knew
            would be the most ambitious and difficult experience of her life. With a brand new website and
            management software system designed by her friend Faythe Gomolka, and a beautiful
            aesthetic thanks to long-time friend Noam Levy, The Hungry Hungry Hannah cafe
            opened its doors in October, 2021.
            <br/>
            <br/>
            After a year in business, Hannah, Faythe, and Noam have found great success.
            A popular hang-out spot for locals in their home town of Sharon, MA, The
            Hungry Hungry Hannah serves up delicious, nutritious plates every morning
            and afternoon. When you stop by, be sure to try their speciality: one of
            Hannah's famous bowls of oats!
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
