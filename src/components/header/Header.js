import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
export default function Header({type}) {
  const [openDate,setOpenDate]=useState(false)
  const [openOptions,setOpenOptions]=useState(false)
  const [options,setOptions]=useState({
    adult:2,
    children:0,
    room:1
  })
  const handleOption=(name,operation)=>{
    setOptions(
      (prev)=>{
        return {
          ...prev,[name]:operation === "i" ? options[name]+1 : options[name]-1,
        };
      });
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  console.log(type)
  return (
    <div className="header">
      <div className={ type==="list" ? "headerContainer listMode" :"headerContainer"}>
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
        {
          type !=="list" &&
          <>
         
            <h1 className="headerTitle">A Lifetime of discount.It's Genious</h1>
            <p className="headerDescription">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
              obcaecati laborum eveniet tenetur numquam nulla.
            </p>
            <button className="headerButton">Signin/Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" className="headerSearchInput" placeholder="Where are you going?"/>
              </div>
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              { openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              />}
              </div>
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
              { openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText"> Adult </span>
                  <div className="optionCounter">
                    <button className="optioncounterButton" disabled={options.adult <= 1} onClick={()=>handleOption("adult","d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optioncounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText"> Children </span>
                  <div className="optionCounter">
                    <button className="optioncounterButton" disabled={options.children <= 0} onClick={()=>handleOption("children","d")} >-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optioncounterButton" onClick={()=>handleOption("children","i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText"> Room </span>
                  <div className="optionCounter">
                    <button className="optioncounterButton" disabled={options.room <= 1} onClick={()=>handleOption("room","d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optioncounterButton" onClick={()=>handleOption("room","i")}>+</button>
                  </div>
                </div>
              </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton">Search</button>
              </div>
            </div>
        </>
        }

      </div>
    </div>
  );
}
