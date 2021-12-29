import react from "react";
import { Link } from "react-router-dom";
import { WebcamProps } from "react-webcam";
import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

import "./UserPage.css"

export default function UserPage(){
    return(
        <div className="usercontainer">
            <h1>Please select a feature</h1>
                {/* <li><Link to="/imagecapture/">image capture</Link></li> */}
                <div>
                    <Link to="/imagecapture/1">Detect Emotions</Link>
                    <Link to="/imagecapture/2">Detect Emotions (from group image)</Link>
                    <Link to="/imagecapture/3">Yoga Prediction</Link>
                    <Link to="/" >Logout</Link>
                </div>
        </div>
    )
}