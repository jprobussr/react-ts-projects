import './ProductCard.css';
import type { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number): string => {
    return `$${product.price.toFixed(2)}`;
  };

  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{formatPrice(product.price)}</p>

      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </article>
  );
};

export default ProductCard;
