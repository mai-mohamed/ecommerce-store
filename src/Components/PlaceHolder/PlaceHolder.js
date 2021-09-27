import { Card, Placeholder } from "react-bootstrap";

const PlaceHolder = () => {
  return (
    <Card className="m-2">
      <div className="img-wrapper mt-5 mb-3 m-auto w-75"></div>
      <Card.Body className="text-center">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
export default PlaceHolder;
