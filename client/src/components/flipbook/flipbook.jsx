import * as React from 'react';
import "./flipbook.css";

export default function Flipbook({ videoFolderUrl }) {
    const [img, setImg] = React.useState();
    let currentFrameNum = 0;
    const fps = 30;
    const numFrames = 600;

    async function fetchFrame(framePath = 0){                       //fetches frame from server from path
        const frame = await fetch(framePath);      
        const imageBlob = await frame.blob();                       //converts frame to blob
        const imageObjectURL = URL.createObjectURL(imageBlob);      //creates url for blob
        setImg(imageObjectURL);
    };

    React.useEffect(() => {
        //create interval to fetch next frame every 1/fps seconds
        setInterval(() => {
            if(currentFrameNum >= numFrames){        //if at end of video, reset to beginning
                currentFrameNum = 0;
            }
            else{                                               //else, fetch next frame
                currentFrameNum++;
                let framePath = videoFolderUrl + ("000" + currentFrameNum).slice(-3) + ".jpg"
                fetchFrame(framePath)
            }
        }, 1000/fps);
    }, []);

    return(
        <div className="flipbook">
            <img className="video" src={img} alt="Flipbook"/>
        </div>
    )
}