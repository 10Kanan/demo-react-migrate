import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return <div>Product id {id}</div>;
};

export default ProductDetail;
