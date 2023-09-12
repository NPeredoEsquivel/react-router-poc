import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductList from "./pages/ProductList";
import RootLayout from "./pages/Root/Root";

/* const routesDefinitions = createRoutesFromElements(
  <Route>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/product-list"} element={<ProductList />} />
  </Route>
);

const router = createBrowserRouter(routesDefinitions); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
