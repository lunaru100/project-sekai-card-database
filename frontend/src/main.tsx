import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./routes/Menu";
import MainPage from "./routes/MainPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "./index.css";

const AppContainer: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
