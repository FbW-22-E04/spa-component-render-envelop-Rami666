import React from "react";
import image from '../images/pngegg.png';
import './Envelope.css';

function Envelope(props) {
  return (
    <div className="container">
      <div className="header-top">
        <div>
          <p>{props.sender}</p>
            {props.sendAdd}
          
        </div>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="bottom-container">
      <div>
        <p>{props.receiver}</p>
       {props.recAdd}
        </div>
      </div>
    </div>
  );
}

export default Envelope;
