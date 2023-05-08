import * as React from 'react';
import  requestFramePath from './requestFramePath';

import "./flipbook.css";
import { request } from 'http';

const host = "http://localhost:3001/";
const tempArray = ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg"];

export default function Flipbook({ videoFolderUrl }) {
    const [img, setImg] = React.useState();

    //VideoRepo(videoFolderUrl).getVideo()

    async function fetchFrame(frameName = 0){
        const frame = await fetch(videoFolderUrl + frameName);
        const imageBlob = await frame.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    React.useEffect(() => {
        fetchFrame(requestFramePath(tempArray, 30));
    }, []);

    return(
        <div className="flipbook">
            <img className="video" src={img} alt="Flipbook"/>
        </div>
    )
}
    
