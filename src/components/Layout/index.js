import React from "react";
import Head from "../Head";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Layout(props) {
  return (
    <Container fluid>
      <Head />
      <Row noGutters={true}>
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      {props.children}
    </Container>
  );
}
