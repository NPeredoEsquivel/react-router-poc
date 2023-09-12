import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h1>ProductDetail</h1>
      <p>Product {params.productId} details</p>
    </>
  );
}
