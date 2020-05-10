import "./Home.css";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//import DataTable from "../components/DataTable";
import Form from "../components/Form";
class Home extends Component {
  state = {
    items: [],
  };

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Container className="App">
            <Row>
              <Col>
                <h1 style={{ margin: "20px 0" }}>Student Info</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={{ margin: "20px 0" }}>Student Database</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
