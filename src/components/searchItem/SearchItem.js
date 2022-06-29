import React from "react";
import "./SearchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYsq0keW82D9Nb6uSvic9jfekRq8c3d3Lv7LeW2K0k5tQ6oGMrF-nFNdGh_6Jt2HbEmo&usqp=CAU"
        alt="siImage"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTexiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air condition</span>
        <span className="siFeatures">
          Entire studio .1 bathhroom . 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOptionSubtitle">
          you can cancel later, so lock this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRatting">
          <span>Ecelent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">InClude taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
