


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </StrictMode>
);
