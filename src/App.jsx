// import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import PetDetails from "./Pages/PetDetails";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/petDetails",
//         element: <PetDetails />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <span>Hello</span>
    </>
  );
}

export default App;
