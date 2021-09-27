import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "../../store/Categories/actions";
import { getAllProductsAction } from "./../../store/Products/actions";
import { setLoaderAction } from "../../store/Server/actions";
import AllProducts from "./AllProducts/AllProducts";
import Categories from "./Categories/Categories";
import Filters from "./Filters/Filters";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderAction(true));
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductsAction());
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center my-5">
        <h1>Our ecommerce store</h1>
        <Categories />
      </div>
      <div className="row">
        <div className="col-md-4">
          <Filters />
        </div>
        <div className="col-md-8">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};
export default Main;
