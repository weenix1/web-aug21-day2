import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import romancebooks from "../data/romance.json";
import fanbooks from "../data/fantasy.json";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";
import scifiBooks from "../data/scifi.json";
import { Form } from "react-bootstrap";

class LastestRelease extends Component {
  state = {
    selectedCategory: null,
  };

  render() {
    return (
      <Container className="mb-4">
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="FormCustomSelect" srOnly>
                Categories
              </Form.Label>
              <Form.Control
                as="select"
                onChange={(event) =>
                  this.setState({ selectedCategory: event.target.value })
                }
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option href="#romance" value="romance">
                  Romance
                </option>
                <option href="#fantasy" value="fantasy">
                  Fantasy
                </option>
                <option href="#history" value="history">
                  History
                </option>
                <option href="#horror" value="horror">
                  Horror
                </option>
                <option href="#scifi" value="scifi">
                  Scifi
                </option>
              </Form.Control>
              <p>Choose Category : {this.state.selectedCategory}</p>
            </Col>
          </Form.Row>
        </Form>

        <Row id="romance" className="row" style={{ marginTop: "2rem" }}>
          {romancebooks.map((book) => (
            <Col key={book.asin} className="d-flex" xs={6} md={4} lg={3}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="img-fluid d-block w-100"
                  variant="top"
                  src={book.img}
                  onClick={() => this.setState()}
                />
                <Card.Body>
                  <Card.Title className="clamp">{book.title}</Card.Title>
                  <h4>{book.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{book.price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row id="fantasy" className="row" style={{ marginTop: "2rem" }}>
          {fanbooks.map((fantasy) => (
            <Col key={fantasy.asin} className="d-flex" xs={6} md={4} lg={3}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="img-fluid d-block w-100"
                  variant="top"
                  src={fantasy.img}
                />
                <Card.Body>
                  <Card.Title className="clamp">{fantasy.title}</Card.Title>
                  <h4>{fantasy.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{fantasy.price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row id="history" className="row" style={{ marginTop: "2rem" }}>
          {historyBooks.map((history) => (
            <Col key={history.asin} className="d-flex" xs={6} md={4} lg={3}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="img-fluid d-block w-100"
                  variant="top"
                  src={history.img}
                />
                <Card.Body>
                  <Card.Title className="clamp">{history.title}</Card.Title>
                  <h4>{history.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{history.price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row id="horror" className="row" style={{ marginTop: "2rem" }}>
          {horrorBooks.map((horror) => (
            <Col key={horror.asin} className="d-flex" xs={6} md={4} lg={3}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="img-fluid d-block w-100"
                  variant="top"
                  src={horror.img}
                />
                <Card.Body>
                  <Card.Title className="clamp">{horror.title}</Card.Title>
                  <h4>{horror.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{horror.price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row id="scifi" className="row" style={{ marginTop: "2rem" }}>
          {scifiBooks.map((scifi) => (
            <Col key={scifi.asin} className="d-flex" xs={6} md={4} lg={3}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="img-fluid d-block w-100"
                  variant="top"
                  src={scifi.img}
                />
                <Card.Body>
                  <Card.Title className="clamp">{scifi.title}</Card.Title>
                  <h4>{scifi.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{scifi.price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LastestRelease;
