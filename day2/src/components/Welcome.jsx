import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron className="myJumbo">
    <h1>Welcome, StriveBooks!</h1>
    <p>
      Here you can find all the books you want, including horror, romance etc.
      Enjoy!!
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
);

export default Welcome;
