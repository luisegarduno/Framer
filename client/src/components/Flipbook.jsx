import * as React from 'react';

export default function Flipbook({ videoFolderUrl }) {
    const [img, setImg] = React.useState();
    
    const fetchImage = async () => {
        const folder = await fetch(videoFolderUrl);
        const frame001 = folder + "001.jpg";
        const imageBlob = await frame001.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

  
    React.useEffect(() => {
      fetchImage();
    }, []);

    return(
        <img src={img} alt="Flipbook"/>
    )
}