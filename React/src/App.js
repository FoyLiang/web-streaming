import React from 'react';
import ReactHLS from 'react-hls';

function App() {

  return (
    <div         
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ReactHLS url={"http://localhost:8000/live"+window.location.pathname+"/index.m3u8"} width='1600' height='900'/>
    </div>
  );
}

export default App;