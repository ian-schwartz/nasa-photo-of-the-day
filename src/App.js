import React from "react";
import PhotoDisplay from "./components/PhotoDisplay";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <PhotoDisplay />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
