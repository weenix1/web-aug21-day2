import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import books from "../data/romance.json";
import fanbooks from "../data/fantasy.json";

class LastestRelease extends Component {
  render() {
    return (
      <Container className="mb-4">
        <Row className="row" style={{ marginTop: "2rem" }}>
          {books.map((book) => (
            <Col key={book.asin} className="d-flex" xs={6} md={4}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="d-block w-100"
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

        <Row className="row" style={{ marginTop: "2rem" }}>
          {fanbooks.map((fantasy) => (
            <Col key={fantasy.asin} className="d-flex" xs={6} md={4}>
              <Card style={{ marginTop: "2rem" }}>
                <img
                  className="d-block w-100"
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
      </Container>
    );
  }
}

export default LastestRelease;
