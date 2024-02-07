import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home.jsx";
import Pageone from "./pages/pageone.jsx";

const currentUrl = window.location.pathname;
if (currentUrl === "/") {
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById("root")
  );
} else if (currentUrl === "/pageone") {
  ReactDOM.render(
    <React.StrictMode>
      <Pageone />
    </React.StrictMode>,
    document.getElementById("pageone")
  );
}
