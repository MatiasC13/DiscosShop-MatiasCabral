import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title={"Novedades"} />
    </>
  );
}

export default App;
