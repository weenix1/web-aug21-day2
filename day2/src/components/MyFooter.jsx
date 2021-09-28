import Nav from "react-bootstrap/Nav";

const MyFooter = () => (
  <footer className="py-5">
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Contact us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Free Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Reviews</Nav.Link>
      </Nav.Item>
    </Nav>
    <p className="text-center mt-4 mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe.
      Non veniam magnam culpa id temporibus, quos nam tenetur aut iste inventore
      quidem iure ratione accusamus autem alias aspernatur quis.
    </p>
  </footer>
);

export default MyFooter;
