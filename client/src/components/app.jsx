import * as React from 'react';
import "./app.css";
import Flipbook from './flipbook';
const videoUrl = "http://localhost:3001/assets/videos/video1/frames/"

export function App() {
  return (
    <div className="app">
      <header>
        <h1>Digital Flipbook Player</h1>
      </header>
      <main>
        <Flipbook videoFolderUrl={videoUrl}/>
      </main>
    </div>
  );
}