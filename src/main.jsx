import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Welcome from "./pages/Welcome";
import Question1 from "./pages/questions/Question1";
import Question2 from "./pages/questions/Question2";
import Question3 from "./pages/questions/Question3";
import Question4 from "./pages/questions/Question4";
import InitiationInterventions from "./pages/boxes/regular-lane/InitiationInterventions";
import FastLane from "./pages/lanes/FastLane";
import { CssBaseline } from "@mui/material";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../i18n";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "question",
        children: [
          {
            path: "1",
            element: <Question1 />,
          },
          {
            path: "2",
            element: <Question2 />,
          },
          {
            path: "3",
            element: <Question3 />,
          },
          {
            path: "4",
            element: <Question4 />,
          },
        ],
      },
      {
        path: "box",
        children: [
          {
            path: "initiation",
            element: <InitiationInterventions />,
          },
        ],
      },
      {
        path: "lanes",
        children: [
          {
            path: "fast",
            element: <FastLane />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
