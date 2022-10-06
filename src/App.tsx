import React from "react";
import "./App.css";
import ChannelInfo from "./Component/ChannelInfo";

function App() {
  return (
    <div className="App">
      <ChannelInfo channelName="Dr.Vipin Classes" playlistCount={40} />
    </div>
  );
}

export default App;
