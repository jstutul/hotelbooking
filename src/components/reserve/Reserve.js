import React, { useContext } from "react";
import "./Reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
const Reserve = ({ setOpen, hotelId }) => {
  const [selectRooms, setSelectRooms] = useState([]);
  const { dates } = useContext(SearchContext);
  const { data } = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectRooms(
      checked
        ? [...selectRooms, value]
        : selectRooms.filter((item) => item !== value)
    );
  };
  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const alldates = getDateInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:5000/api/rooms/availability/${roomId}`,
            { dates: alldates }
          );
          return res.data;
        })
      );
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Rooms</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max People : <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="rButton" onClick={handleClick}>
          Reserve Now
        </button>
      </div>
    </div>
  );
};
export default Reserve;
