import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import {Center} from "@chakra-ui/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.style = {height: '100%'};

function Demo() {
    return (
        <Center mt={20}>
            <video  width="80%" height="80%" controls >
                <source src="/static/5MinDemo.mp4" type="video/mp4" />
            </video>
        </Center>
    );
}

root.render(
  <React.StrictMode>
      {/*<BrowserRouter>*/}
      {/*    <Routes>*/}
      {/*        <Route exact path="/" element={<App h='100%' />}/>*/}
      {/*        <Route exact path="/demo" element={<Demo />} />*/}
      {/*    </Routes>*/}
      {/*</BrowserRouter>*/}
    <App h='100%' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
