import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product] = useContext(ProductContext);
  const { url } = useParams();
  const details = product.find((param) => param.id === url);
  return (
    <div className="a">
        <h1 >{details.title}</h1>
    </div>
  )
  }
export default Details;
