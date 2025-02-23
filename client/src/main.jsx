import { StrictMode } from "react"; // React library
import { createRoot } from "react-dom/client"; // For rendering to the DOM
import { RouterProvider } from "react-router-dom"; // For routing
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // For data fetching
import "./index.css"; // Global styles
import router from "./routes/router.jsx"; // Application routes

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Render the application
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
