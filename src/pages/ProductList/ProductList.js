import React from "react";
import { Link } from "react-router-dom";

const PRODUCT_LIST = [
  { id: "product-1", name: "First Product" },
  { id: "product-2", name: "Second Product" },
  { id: "product-3", name: "Third Product" },
];

export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {PRODUCT_LIST.map((singleProduct) => {
          return (
            <li>
              <Link to={`/products/${singleProduct.id}/detail`}>
                {singleProduct.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
