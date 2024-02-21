import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { Page } from "./page/Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pageone" Component={Page} />
      </Routes>
    </>
  );
}

export default App;
