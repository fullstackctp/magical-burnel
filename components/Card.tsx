import { ItemInterface } from "../interfaces/item";

const Card = ({ product }: { product: ItemInterface }) => {
  return (
    <div id="product-card">
      <div id="product-front">
        <div className="shadow"></div>
        <img src={`${product.thumbnail}`} alt="" />
        <div className="image_overlay"></div>
        <div className="stats">
          <div className="stats-container">
            <span className="product_price">$ {product.price}</span>
            <span className="product_name">{product.title}</span>
            <div className="product_category">
              Category : {product.category}
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
