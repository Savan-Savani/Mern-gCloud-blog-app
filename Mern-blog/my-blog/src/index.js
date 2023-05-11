import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjVj0yZO6na1cCTC7o3GGskuolTPlq2RM",
  authDomain: "mern-stack-blog-app.firebaseapp.com",
  projectId: "mern-stack-blog-app",
  storageBucket: "mern-stack-blog-app.appspot.com",
  messagingSenderId: "221516173249",
  appId: "1:221516173249:web:061ba25a8287ee9d616940"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
