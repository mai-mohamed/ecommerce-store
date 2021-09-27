import { Form } from "react-bootstrap";
const ColorFilter = ({ data, onChange, checked }) => {
  return (
    <>
      {data?.map((item, i) => (
        <Form.Check
          key={i}
          type="radio"
          label={item}
          name="color"
          value={item}
          onChange={onChange}
          checked={item == checked ? true : false}
        />
      ))}
    </>
  );
};
export default ColorFilter;
