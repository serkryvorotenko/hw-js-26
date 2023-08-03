import React from "react";
import {createRoot} from "react-dom/client";


import './style/style.scss'
import {App} from "./component/App.jsx";


const root = createRoot(document.getElementById('app'));
root.render(<App/>);


