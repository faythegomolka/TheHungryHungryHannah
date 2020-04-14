import React, { Component } from 'react';
import './styles/Contact.scss';
import Modal from "./Modal.js";

class Contact extends Component {

  state={
    show: false,
    modalMessage: "Thanks for getting in contact",
  }

  showModal = (type) => {
    let message = type === "Reservation" ? "Thanks for making a reservation. We'll see you soon!" :
            "Thanks for getting in contact. We'll get back to you as soon as we can!";
    this.setState({
      show: !this.state.show,
      modalMessage: message,
    });
  }


  render() {
    let today = new Date();
    let maxYear = today.getMonth() + 1 === 12? today.getFullYear() + 1 : today.getFullYear();
    let maxMonth = (today.getMonth() + 2) < 10 ? "0" + (today.getMonth() + 2) : (today.getMonth() + 2);
    let maxDay = today.getDate() > 28 ? 28 : today.getDate() < 10? ("0" + today.getDate()) : today.getDate();
    let maxDate = maxYear + '-' + maxMonth + '-' + maxDay;
    let curMonth = (today.getMonth() + 1) < 10? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
    let curDate = today.getDate() < 10? ("0" + today.getDate()) : today.getDate();
    let minDate = today.getFullYear() + '-' + curMonth + '-' + curDate;

    let partySizeId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let partySizeOptions = [{name: "Party size"}, {name: "1 guest"}, {name: "2 guests"},
                    {name: "3 guests"},{name: "4 guests"},{name: "5 guests"},
                    {name: "6 guests"}, {name: "7 guests"}, {name: "8 guests"},
                    {name: "Please contact us directly for large bookings"}];
    let selectedPartySizeId = 0;

    let reservationTimeId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let reservationTimeOptions = [{name: "Time"}, {name: "9:00 AM"}, {name: "9:30 AM"},
                    {name: "10:00 AM"},{name: "10:30 AM"},{name: "11:00 AM"},
                    {name: "11:30 AM"}, {name: "12:00 PM"}, {name: "12:30 PM"},
                    {name: "1:00 PM"}, {name: "1:30 PM"}];
    let selectedTimeId = 0;
    return (

        <div className="Contact">
        <Modal body={this.state.modalMessage}
              onClose={this.showModal} show={this.state.show}/>
          <div className="Reservation">
            <h2 className="Reservation-text">MAKE A RESERVATION</h2>
            <form>
              <input type="text" placeholder="Name" className="Input-style"></input>
              <input type="text" placeholder="Phone number" className="Input-style"></input>
              <select defaultValue={selectedPartySizeId}>
                {partySizeId.map(id =>
                  <option key={id} value={id}>{partySizeOptions[id].name}</option>
                 )}
              </select>
              <input type="date" min={minDate} max={maxDate} placeholder="Date" className="Input-style"></input>
              <select defaultValue={selectedTimeId}>
                {reservationTimeId.map(id =>
                  <option key={id} value={id}>{reservationTimeOptions[id].name}</option>
                 )}
              </select>
            </form>
            <button onClick={() => this.showModal("Reservation")} className="Submit-style">Request</button>
          </div>
          <div className="Contact-us">
            <h2 className="Contact-us-text">CONTACT US</h2>
            <h3 className="Contact-subtext">
              Send us a message and we’ll get back to you as soon as possible. <br/>
              Looking forward to hearing from you!
            </h3>
            <form>
              <input type="text" placeholder="Name" className="Contact-input-style"></input>
              <input type="text" placeholder="Email" className="Contact-input-style"></input>
              <input type="text" placeholder="Phone number" className="Contact-input-style"></input>
              <input type="text" placeholder="Your message" className="Contact-input-style" style={{paddingBottom: '25vh'}}></input>
            </form>
            <button onClick={() => this.showModal("Contact")} value="Send" className="Submit-contact">Send</button>
          </div>
        </div>
    );
  }
}

export default Contact;
