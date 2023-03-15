import React from 'react';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";



const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(<React.StrictMode>
		<App />
	</React.StrictMode>, rootElement);
} else {
	render(<React.StrictMode>
		<App />
	</React.StrictMode>, rootElement);
}