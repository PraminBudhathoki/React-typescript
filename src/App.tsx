import React from "react";
import "./App.css";
import ChannelInfo from "./Component/ChannelInfo";
import PlaylistInfo from "./Component/PlaylistInfo";

function App() {
  const lang = ["Java", "Kotlin", "Golang", "React"];
  const numberofVideos = {
    java: 100,
    kotlin: 200,
    golang: 150,
    react: 150,
  };
  return (
    <div className="App">
      <ChannelInfo channelName="Dr.Vipin Classes" playlistCount={40} />
      <PlaylistInfo lang={lang} videos={numberofVideos} />
    </div>
  );
}

export default App;
