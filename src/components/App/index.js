import React from "react";
import Layout from "../Layout";

import Search from "../Search";
import Results from "../Results";
import { Provider } from "../../context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import Favourites from "../Favourites";

import "./index.css";

function App() {
  return (
    <Provider>
      <Layout>
        <Row noGutters={true}>
          <Col md={6} noGutters={true}>
            <div className="leftside content">
              <div className="search">
                <Search />
              </div>
              <Results />
            </div>
          </Col>

          <Col md={6} noGutters={true}>
            <div className="rightside content">
              <Favourites />
            </div>
          </Col>
        </Row>
      </Layout>
    </Provider>
  );
}

export default App;
