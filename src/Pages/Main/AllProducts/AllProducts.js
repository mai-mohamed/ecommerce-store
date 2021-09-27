import { useSelector } from "react-redux";
import PlaceHolder from "../../../Components/PlaceHolder/PlaceHolder";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const AllProducts = () => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const isLoading = useSelector((state) => state.server.isLoading);
  return (
    <div className="row ">
      {isLoading &&
        [0, 1, 2, 3].map((product) => (
          <div className="col-lg-6 text-center my-2" key={product}>
            <PlaceHolder />
          </div>
        ))}
      {!isLoading &&
        allProducts.length > 0 &&
        allProducts.map((product) => (
          <div key={product.id} className="col-lg-6 text-center my-2">
            <ProductCard product={product} />
          </div>
        ))}
      {!isLoading && allProducts.length == 0 && (
        <h3 className="text-center mt-5 pt-5">No data found</h3>
      )}
    </div>
  );
};
export default AllProducts;
