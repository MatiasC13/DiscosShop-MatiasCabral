import React from "react";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer title={"Destacados"} /> */}
    </>
  );
}

export default App;
