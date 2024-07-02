import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Default_Components/Router/Router.jsx";
import Context from "./Components/Default_Components/Context/Contaxt.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);
