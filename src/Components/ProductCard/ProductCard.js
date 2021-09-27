import Stars from "../Stars/Stars";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="border product-card__wrapper">
      <div className="img-wrapper w-50  mt-5 mb-3 m-auto">
        <img src={product.image} alt={product.name} className="img-fluid " />
      </div>

      <p className="mb-0"> {product.name}</p>
      <Stars size={30} value={product.rating} edit={false} />
      <p>
        {product.price} <span>{product.currency}</span>
      </p>
    </div>
  );
};

export default ProductCard;
