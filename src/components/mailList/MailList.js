import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <div className="mailTitle">Save Money, Save Time</div>
      <div className="mailDesc">
        Sign up, and we will sed you the best deal to you
      </div>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
