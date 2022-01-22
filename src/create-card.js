import React from "react";

import Title from "./Title";
import Article from "./article";
import Picture from "./picture";
import Price from "./price";
import Counter from "./counter";
import Description from "./description";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Article>{product.article}</Article>
      <div style={{display:"flex"}}>
        <div>
          <Picture src={product.picture} alt={product.alt} />
        </div>
        <div>
          <Price oldPrice = {product.oldPrice} newPrice ={product.newPrice} />
          <div>
            <Counter></Counter>
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
        </div>
      </div>
      <div>
        <Description>{product.description}</Description>
        <button type="button">Подробнее</button>
      </div>
    </section>
  );
}

export default ProductPage;
