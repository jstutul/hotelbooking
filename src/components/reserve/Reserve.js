import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
const Reserve=({setOpen,hotelId})=> {
  return (
    <div className='reserve'>
        <div className='rContainer'>
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)} />
            <span>Select your Rooms</span>
        </div>
    </div>
  )
}
export default Reserve;
