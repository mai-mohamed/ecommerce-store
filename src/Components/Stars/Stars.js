import ReactStars from "react-rating-stars-component";
const Stars = ({ size, value, edit }) => {
  return (
    <>
      <ReactStars size={size} value={value} edit={edit} />
    </>
  );
};
export default Stars;
