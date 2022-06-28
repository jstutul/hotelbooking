import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Cars Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discount.It's Genious</h1>
        <p className="headerDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          obcaecati laborum eveniet tenetur numquam nulla.
        </p>
        <button className="headerButton">Signin/Register</button>
      </div>
    </div>
  );
}
