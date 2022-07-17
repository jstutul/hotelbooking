import React from "react";
import "./featuredProperties.css";
import useFetch from '../../hooks/useFetch'
export default function FeaturedProperties() {

  const url="http://localhost:5000/api/hotels?featured=true&limit=3&min=2&max=400";
  const {data,loading}=useFetch(url);
  const images=[
      "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1zurL4s0yAhmn_5XLacsOjx2Ux9OjU-Z8RDS7MUch_L1m1TBD8P7eAeI6KlBYptBgYM&usqp=CAU",
      "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit"
   ]
  return (
    <div className="fp">
      {
        loading ? "Loading Please Wait"
        :
        <>
        {
            data.map((item)=>(
              <div className="fpItem" key={item._id}>
              <img
                className="fpImg"
                src={item.photos[0]?item.photos[0]:images[0] }
                alt="icon"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpPrice" style={{textTransform: "capitalize"}}>{item.city}</span>
              <span className="fpName">Staring from {item.cheapestPrice}$</span>
              {item.ratting && <div className="fpRatting">
                <button>{item.ratting}</button>
                <span>Exelent</span>
              </div>}
            </div>
            ))
        }
       
        
        </>
        }
      

      
    </div>
  );
}
