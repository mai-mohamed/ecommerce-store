import Slider from "react-slick";
import { useSelector } from "react-redux";
import "./Slider.scss";
const SliderComponent = ({ categories, onClick }) => {
  const isLoading = useSelector((state) => state.server.isLoading);
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {!isLoading &&
        categories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer"
            onClick={() => onClick(category.id)}
            className="px-3 category__wrapper"
          >
            <img
              src={category.image}
              alt={category.name}
              className="img-fluid"
            />
            <div className="category-overlay d-flex align-items-center justify-content-center mx-3">
              <h4>{category.name}</h4>
            </div>
          </div>
        ))}
    </Slider>
  );
};
export default SliderComponent;
