import * as React from 'react';
import "./app.css";
//import Flipbook from "./Flipbook.jsx";
const folderURL = "http://localhost:3001/assets/videos/video1/frames/"

// This is a placeholder. Feel free to edit or remove this code :)
export function App() {
  const [img, setImg] = React.useState();

  const fetchImage = async () => {
    const res = await fetch(folderURL + "001.jpg");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  React.useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Digital Flipbook Player</h1>
      </header>
      <main>
        {/*<Flipbook></Flipbook>*/}
        <img src={img} alt="Flipbook"/>
      </main>
    </div>
  );
}