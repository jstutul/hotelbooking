import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import useFetch from "./../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Reserve from "../../components/reserve/Reserve";

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
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const url = `http://localhost:5000/api/hotels/find/${id}`;
  const { data, loading } = useFetch(url);
  const {dates,options}=useContext(SearchContext);
  const MILLISECOND_PER_DAY=1000*60*60*24;
  function dayDifference(date1,date2){
    const timeDiff=Math.abs(date2.getTime()-date1.getTime());
    const diffDays=Math.ceil(timeDiff/MILLISECOND_PER_DAY);
    return diffDays;
  }
  const days=dayDifference(dates[0].endDate,dates[0].startDate);

  
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
  const {user}=useContext(AuthContext)
  const navigate=useNavigate();
  const handleClick=()=>{
    if(user){
      setOpenModal(true);
    }else{
      navigate("/login")
    }
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading Please Wait"
      ) : (
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
                  src={data.photos[sliderNumber]}
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
            <button onClick={handleClick} className="bookNow">Reserve or Book Now</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excelent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over {data.cheapestPrice}$ at this property and get a
              free airport service
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    src={photo}
                    onClick={() => handleOpen(i)}
                    className="hotelImg"
                    alt="hotelRoom"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay</h1>
                <span>
                  Located in the heart of dhanmondi, this property has an
                  excelent location store of 9.8
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b>({days} nights)
                </h2>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
          <MediaList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} /> }
    </>
  );
};

export default Hotel;
