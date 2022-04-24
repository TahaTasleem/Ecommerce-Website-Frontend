import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ffcba4" }}>
      <Container>
        <Row>
          <Col className="text-center py-3" style={{ fontWeight: "bold" }}>
            Copyright &copy; Taha
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
