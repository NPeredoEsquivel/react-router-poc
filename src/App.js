import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductList/ProductDetail/ProductDetail";
import RootLayout from "./pages/Root/Root";
import Error from "./pages/Error/Error";

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
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:productId/detail", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
