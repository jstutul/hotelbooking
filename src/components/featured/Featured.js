import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./Featured.css"
export default function Featured() {
    const url="http://localhost:5000/api/hotels/countByCity?cities=dhaka,pabna,cumilla,barisal";
    const {data,loading}=useFetch(url);
    return (
        <div className="featured">
            { loading ? "Loading Please Wait":
            <>
            <div className="featuredItem">
                <img className="featuredImg" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit" alt="Imagejs" />
                <div className="featuredTitles">
                    <h1>Dhaka</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit" alt="Imagejs" />
                <div className="featuredTitles">
                    <h1>Pabna</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit" alt="Imagejs" />
                <div className="featuredTitles">
                    <h1>Cumilla</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003802-1600x1066-FIT_AND_TRIM-ed3444a6a10b221d5d0c50ebfd2498cb.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit" alt="Imagejs" />
                <div className="featuredTitles">
                    <h1>Barisal</h1>
                    <h2>{data[3]} properties</h2>
                </div>
            </div>
            </>
            }
        </div>
    )
}
