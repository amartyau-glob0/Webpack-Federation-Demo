import React from "react";
import './App.css';

const GloMessage = React.lazy(() => import("PhoenixDemo/GloMessage"));

function App() {
  return (
    <div className="App">
      <h3>Proposals has been successfully loaded in .... </h3>
      <GloMessage></GloMessage>
    </div>
  );
}

export default App;