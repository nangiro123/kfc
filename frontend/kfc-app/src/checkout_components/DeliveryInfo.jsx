import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import "./DeliverInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="delivery_info_container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h3>DELIVERY INFO</h3>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <FiMapPin aria-hidden="true" />
            <p style={{ marginLeft: "20px" }}>KFC Delhi - CP1</p>
          </div>
          <p style={{ marginLeft: "20px", marginTop: "-10px"}}>New Delhi, Delhi 110001, India</p>
          <p>Address 2</p>
          <input className="input_style"
            type="text"
            placeholder="Appartment, suite, unit, building, floor"
          />
          <div style={{display: "flex"}}>
            <FiClock aria-hidden="true" />
            <h4 style={{marginLeft: "20px"}}>ASAP</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
