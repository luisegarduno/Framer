import * as React from 'react';


//calls 30 times per second but only returns the last frame, I know I cant assign to a const but I dont know how else to save current frame.
//Classes are not reccomended in react anymore so cant use that to save propreties
export default function RequestFrame(frames, fps) { 
    const currentFrameNum = 0;
    const intervalId = setInterval(() => {
        if(currentFrameNum === frames.length - 1){
            currentFrameNum = 0;
        }
        else{
            currentFrameNum++;
        }
    }, 1000/fps);
    return(frames[currentFrameNum]);
}


//had it set up with a react hook but it wasnt working, 
//I think it was because it was embedded within another react hook in flipbook.jsx

/*
export default function RequestFramePath(frames, fps) {
    const [currentFrameNum, setCurrentFrameNum] = React.useState(null);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentFrameNum === frames.length - 1){
                setCurrentFrameNum(0);
            }
            else{
                setCurrentFrameNum(currentFrameNum + 1);
            }
        }, 1000/fps);
        return () => clearInterval(intervalId);
    }, []);

    return frames[currentFrameNum];
}
*/