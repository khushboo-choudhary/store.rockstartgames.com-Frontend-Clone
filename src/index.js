import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import * as ReactDOMClient from 'react-dom/client';
// import React from 'react';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";
// const rootElement = document.getElementById("root");

// const root = ReactDOMClient.createRoot(rootElement);
// root.render(<BrowserRouter><App callback={() => console.log("renderered")} /></BrowserRouter>);
// reportWebVitals();


