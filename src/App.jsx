import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import Settings from "./pages/Settings";
import AnimatedRoutes from "./components/AnimatedRoutes";
import EventProvider from "./context/EventContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AnimatedRoutes>
          <Home />
        </AnimatedRoutes>
      ),
    },
    {
      path: "/add-event",
      element: (
        <AnimatedRoutes>
          <AddEvent />
        </AnimatedRoutes>
      ),
    },
    {
      path: "/settings",
      element: (
        <AnimatedRoutes>
          <Settings />
        </AnimatedRoutes>
      ),
    },
  ]);

  return (
    <EventProvider>
      <RouterProvider router={router} />
    </EventProvider>
  );
}
export default App;
