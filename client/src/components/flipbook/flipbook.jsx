import * as React from 'react';
import "./flipbook.css";

const host = "http://localhost:3001/";
const tempArray = ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg"]; //temp replicate of api output

export default function Flipbook({ videoFolderUrl }) {
    const [img, setImg] = React.useState();
    let currentFrameNum = 0;
    const fps = 30;

    //VideoRepo(videoFolderUrl).getVideo()

    async function fetchFrame(frameName = 0){                       //fetches frame from server from path
        const frame = await fetch(videoFolderUrl + frameName);      
        const imageBlob = await frame.blob();                       //converts frame to blob
        const imageObjectURL = URL.createObjectURL(imageBlob);      //creates url for blob
        setImg(imageObjectURL);
    };

    React.useEffect(() => {
        //create interval to fetch next frame every 1/fps seconds
        setInterval(() => {
            if(currentFrameNum >= tempArray.length - 1){        //if at end of video, reset to beginning
                currentFrameNum = 0;
            }
            else{                                               //else, fetch next frame
                currentFrameNum++;
                fetchFrame(tempArray[currentFrameNum])
            }
        }, 1000/fps);
    }, []);

    return(
        <div className="flipbook">
            <img className="video" src={img} alt="Flipbook"/>
        </div>
    )
}
    
