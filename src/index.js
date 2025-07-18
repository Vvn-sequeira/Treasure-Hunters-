import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import { data } from "./data/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<First />} />
        <Route path="/start" element={<App data={data[0]} />} />
        <Route path="/First" element={<App data={data[1]} />} />
        <Route path="/Second" element={<App data={data[2]} />} />
        <Route path="/Third" element={<App data={data[3]} />} />
        <Route path="/Fourth" element={<App data={data[4]} />} />
        <Route path="/Fifth" element={<App data={data[5]} />} />
        <Route path="/Sixth" element={<App data={data[6]} />} />
        <Route path="/Seventh" element={<App data={data[7]} />} />
        <Route path="/Eighth" element={<App data={data[8]} />} />
        <Route path="/Ninth" element={<App data={data[9]} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
