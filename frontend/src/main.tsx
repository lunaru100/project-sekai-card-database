import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./routes/Menu";
import MainPage from "./routes/MainPage";
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
          element: <div>Login</div>,
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
