import React,{useState, useContext} from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Routesfolder from "./Routesfolder";
import Header from "./Components/Header/header";
import NoteState from "./pages/NoteState";
import Sample from "./pages/sample";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";


function App() {
  let date = new Date();
  // console.log((date.getUTCDay() +6 ) % 7)
  console.log()
    return (
      <div className="App-Maincontainer">
        <NoteState>
        <Routesfolder />
        </NoteState>
      </div>
    );
  }
  
  export default App;