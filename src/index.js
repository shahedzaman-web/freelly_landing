import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Download from './components/Download';
import PrivacyPolicyComponent from './components/PrivacyPolicy';
import './index.css';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([

  {
        path: "/",
        element: <App />,

      },
      {
        path: "/privacy",
        element: <PrivacyPolicyComponent />,
      },
      {
        path: "/download",
        element: <Download />,
      },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider
  router={router}
  // fallbackElement={<BigSpinner />}
/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
