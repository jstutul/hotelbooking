import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const photos = [
  {
    src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    src: "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc=",
  },
  {
    src: "https://thumbs.dreamstime.com/z/hotel-room-27254386.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    src: "https://st.depositphotos.com/1164721/2078/i/600/depositphotos_20784379-stock-photo-interior-of-modern-comfortable-hotel.jpg",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYsq0keW82D9Nb6uSvic9jfekRq8c3d3Lv7LeW2K0k5tQ6oGMrF-nFNdGh_6Jt2HbEmo&usqp=CAU",
  },
];
const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let NewSliderNumber;
    if (direction === "l") {
      NewSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      NewSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(NewSliderNumber);
  };
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setOpen(false)}
              className="close"
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={() => handleMove("l")}
              className="arrow"
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                className="sliderImg"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={() => handleMove("r")}
              className="arrow"
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Hotel Dhanmondi</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 new sobahanbag Dhanmondi</span>
          </div>
          <span className="hotelDistance">
            Excelent location 500 m from Framgate{" "}
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over 113$ at this property and get a free airport
            service
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  className="hotelImg"
                  alt="hotelRoom"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Dhanmondi</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the heart of dhanmondi, this property has an excelent
                location store of 9.8
              </span>
              <h2>
                <b>$888</b>(9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MediaList />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
