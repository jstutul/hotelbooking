import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";
const SearchItem = ({ item }) => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYsq0keW82D9Nb6uSvic9jfekRq8c3d3Lv7LeW2K0k5tQ6oGMrF-nFNdGh_6Jt2HbEmo&usqp=CAU";
  return (
    <div className="searchItem">
      <img src={item.photos[0] ? item.photos[0] : img} alt="siImage" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTexiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air condition</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOptionSubtitle">
          you can cancel later, so lock this great price today !
        </span>
      </div>
      <div className="siDetails">
        {item.ratting && (
          <div className="siRatting">
            <span>Ecelent</span>
            <button>{item.ratting}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">InClude taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
