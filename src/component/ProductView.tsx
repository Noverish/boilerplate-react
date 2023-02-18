import { t } from "i18next";
import { Badge, Card } from "react-bootstrap";
import { Product } from "src/model";

import './ProductView.scss';

interface Props {
  product: Product;
}

export default function ProductView({ product }: Props) {
  return (
    <div className="ProductView">
      <div>
        <img src={product.thumbnail} />
      </div>
      <div className="content">
        <div className="d-flex align-items-center">
          <span className="title">{product.title}</span>
          <Badge className="category ms-auto">{product.category}</Badge>
        </div>
        <div className="description">{product.description}</div>
        <div className="d-flex mt-auto">
          <div className="price_section">
            <span>{t('ProductView.price')}: </span>
            <span className="price">${product.price}</span>
            <span> &gt; </span>
            <span className="discountPercentage">${product.discountPercentage}</span>
          </div>
          <span className="rating ms-auto">{t('ProductView.rating')}: {product.rating}</span>
        </div>
        <div className="d-flex">
          <span className="brand">{product.brand}</span>
          <span className="stock ms-auto">{t('ProductView.stock')}: {product.stock}</span>
        </div>
      </div>
    </div>
  )
}
