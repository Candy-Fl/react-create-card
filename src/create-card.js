import React from "react";

import Title from "./Title";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
    </section>
  );
}

export default ProductPage;
