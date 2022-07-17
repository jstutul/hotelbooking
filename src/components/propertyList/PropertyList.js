import React from 'react'
import "./PropertyList.css"
import useFetch from '../../hooks/useFetch'
export default function PropertyList() {
    const url="http://localhost:5000/api/hotels/countByType";
    const {data,loading}=useFetch(url);
    const images=[
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1zurL4s0yAhmn_5XLacsOjx2Ux9OjU-Z8RDS7MUch_L1m1TBD8P7eAeI6KlBYptBgYM&usqp=CAU",
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1zurL4s0yAhmn_5XLacsOjx2Ux9OjU-Z8RDS7MUch_L1m1TBD8P7eAeI6KlBYptBgYM&usqp=CAU",
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit"
    ]
  return (
    <div className='pList'>
        {
        loading ? "Loading Please Wait"
        :
        <>
        {
            data && images.map((img,i)=>(
                <div className='pListItem' key={i}>
                <img className='pListImg' src={img} alt="pImage"/>
                <div className='pListTitles'>
                    <h1>{data[i]?.type} </h1>
                    <h2>{data[i]?.count} {data[i]?.type} </h2>
                </div>
            </div>
            ))
        }
       
        
        </>
        }
       
    </div>
  )
}
