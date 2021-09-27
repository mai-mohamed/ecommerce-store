import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useState } from "react";
import { colors } from "./Colors";
import { getAllProductsAction } from "../../../store/Products/actions";
import ColorFilter from "../../../Components/ColorFilter/ColorFilter";
import Stars from "../../../Components/Stars/Stars";
import {
  deleteURLParams,
  getURLParams,
  updateUrlParams,
} from "../../../utils/helpers";
import "./Filters.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const [colorsArr, setColorsArr] = useState(colors);
  const [filterColor, setFilterColor] = useState(getURLParams("color"));
  const [filterRating, setFilterRating] = useState(getURLParams("rating"));

  const handleColorFilterChange = (e) => {
    setFilterColor(e.target.value);
    updateUrlParams("color", e.target.value);
    dispatch(getAllProductsAction());
  };

  const handleInputColorChange = (e) => {
    const filteredColorsArr = colors.filter((color) =>
      color.includes(e.target.value)
    );
    setColorsArr(filteredColorsArr);
  };

  const handleRatingFilter = (id) => {
    setFilterRating(id);
    updateUrlParams("rating", id);
    dispatch(getAllProductsAction());
  };

  const handleClearFilter = (param) => {
    param == "color" ? setFilterColor(null) : setFilterRating(null);
    deleteURLParams(param);
    dispatch(getAllProductsAction());
  };

  return (
    <div className="filters__wrapper border mt-2">
      <span className="filter-legend">Filters</span>
      <div className="mx-3 border p-3 my-2 color-filter__wrapper">
        <div className="color-filter ">
          <p>Color:</p>
          <Form.Control
            type="text"
            onChange={handleInputColorChange}
            placeholder="color search.."
            className="w-75 mb-3"
          />

          <ColorFilter
            data={colorsArr}
            onChange={handleColorFilterChange}
            checked={filterColor}
          />
        </div>
        {filterColor && (
          <span
            className="cursor-pointer clear-color-filter "
            onClick={() => handleClearFilter("color")}
          >
            <BsX /> clear
          </span>
        )}
      </div>
      <div className="rating-filter mx-3 border p-3 my-4">
        <p>Average rating:</p>
        {[5, 4, 3, 2, 1].map((data) => (
          <span key={data} onClick={() => handleRatingFilter(data)}>
            <Stars size={30} value={data} edit={false} />
          </span>
        ))}
        {filterRating && (
          <span
            className="cursor-pointer clear-color-filter"
            onClick={() => handleClearFilter("rating")}
          >
            <BsX />
            clear
          </span>
        )}
      </div>
    </div>
  );
};
export default Filters;
