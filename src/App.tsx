import React from "react";
import "./App.css";
import ChannelInfo from "./Component/ChannelInfo";
import PlaylistInfo from "./Component/PlaylistInfo";

function App() {
  const lang = ["Java", "Kotlin", "Golang", "React"];
  return (
    <div className="App">
      <ChannelInfo channelName="Dr.Vipin Classes" playlistCount={40} />
      <PlaylistInfo lang={lang} />
    </div>
  );
}

export default App;
