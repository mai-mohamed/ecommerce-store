import { useSelector } from "react-redux";
import SliderComponent from "../../../Components/Slider/Slider";

const Categories = () => {
  const allCategories = useSelector((state) => state.categories.allCategories);
  const handleCategoryClick = (id) => {
    console.log(id);
  };
  return (
    <>
      <p> Choose one of our categories</p>
      <SliderComponent
        categories={allCategories}
        onClick={(id) => handleCategoryClick(id)}
      />
    </>
  );
};
export default Categories;
