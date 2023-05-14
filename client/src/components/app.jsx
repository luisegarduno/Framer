import * as React from 'react';
import "./app.css";
import Flipbook from './flipbook/flipbook';
const videoUrl = "http://localhost:8000/assets/videos/video1/frames/"

export function App() {
  return (
    <div className="app">
      <header>
        <h1>Digital Flipbook Player</h1>
      </header>
      <main>
        {/*<Loading />*/}
        <Flipbook className="flipbook" videoFolderUrl={videoUrl} fps={30}/>
      </main>
    </div>
  );
}