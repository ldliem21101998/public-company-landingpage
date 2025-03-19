/** @format */

import "./css/animation.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, ActivitiesPage } from "./pages";
import { path } from "./utils/constants";
import React, { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import testAudio from "./assets/Audio/bgAudio.mp3";

function App() {
  
  const sources = [testAudio];
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(sources[currentSourceIndex]));
  const [countStartAudio, setCountStartAudio] = useState(0)

  useEffect(() => {
    // Update the audio source when currentSourceIndex changes
    audioRef.current.src = sources[currentSourceIndex];

    // If isPlaying is true, play the audio when it's loaded
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    }
  }, [currentSourceIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = (currentSourceIndex + 1) % sources.length;
    setCurrentSourceIndex(nextIndex);
  };

  const handleAudioEnded = () => {
    playNext();
  };

  return (
    <Router>

      <div id="_main" className="relative"
        onClick={(event) => {
          let targetElement = event.target;
          // Traverse up the DOM hierarchy until we find the parent div with id "header"
          while (targetElement && targetElement.id !== "header") {
            targetElement = targetElement.parentNode;
          }
          // Check if we found the parent div with id "header"
          if (targetElement && targetElement.id === "header") {
          } else if (countStartAudio < 1) {
            togglePlay()
            setCountStartAudio(countStartAudio + 1)
          }
        }}
      >
        <div className="fixed bottom-[5px] right-[5px] opacity-[0.3] z-[10]">
          <button
            onClick={togglePlay}
            className="bg-black text-white outline-none py-[2px] px-[5px] rounded-md"
          >
            {isPlaying ? (
              <Icon icon={"tabler:volume"}></Icon>
            ) : (
              <Icon icon={"tabler:volume-off"}></Icon>
            )}
          </button>
          <audio ref={audioRef} onEnded={handleAudioEnded} />
        </div>

        <Routes>
          <Route path={path.Landing} element={<LandingPage />} />
          <Route path={path.Activities} element={<ActivitiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
