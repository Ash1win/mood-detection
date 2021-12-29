import react from "react";
import { useRef, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";

import "./ImageCapturePage.css"

export default function ImageCapturePage(){

const webcamRef = useRef(null)
const [imgSrc, setImgSrc] = useState(null)
const param = useParams()

const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc)
}, [webcamRef, setImgSrc])

    let title
    switch (param.feature) {
        case "1":
            title = "Emotion Detection (Individual)"
            break
        case "2":
            title = "Emotion Detection (Group)"
            break
        case "3":
            title = "Yoga Prediction"
            break
        default:
            title = "Emotion Detection (Individual)"
            break
    }

    return (
        <div className="imagecapturecontainer">
            {/* <div className="imageCapture"></div>
            <button>Capture</button>
            <button>Upload</button> */}
            <h1>{ title }</h1>
            <div>
                <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="imageCapture"
                />
                {imgSrc && (
                    <img
                    src={imgSrc}
                className="imageCapture"

                    />
                )}
            </div>  
            <button onClick={capture}>Capture photo</button>
            <button>Analyze</button>
    </div>
    )
}