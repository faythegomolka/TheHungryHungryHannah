import React from 'react';
import "./styles/Modal.scss";

export default class Modal extends React.Component{

  onClose = e =>{
    this.props.onClose && this.props.onClose(e);
  }

  render(){
    if(!this.props.show){
      return null;
    }
    return(
      <div className="Modal">
        <div className="Close-modal-button">
          <button className="Modal-button-style" onClick={e => {this.onClose(e)}}>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div className="Modal-head">
          <h2 className="Modal-head-text">{this.props.head || "Hey there, "} </h2>
          <p className="Body-text">{this.props.body}</p>
        </div>
      </div>
    )
  }
}
