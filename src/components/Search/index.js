import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import { Consumer } from "../../context";

import "./index.css";
export default function Search() {
  const [query, setQuery] = useState("");

  function getLanguage(url) {
    return axios
      .get(url)
      .then(item => {
        const language = Object.keys(item.data).reduce((a, b) =>
          item.data[a] > item.data[b] ? a : b
        );
        return language;
      })
      .catch(error => console.log("No languages for " + url));
  }

  function handleChange(event, dispatch) {
    setQuery(event.target.value);

    if (event.target.value.length === 0) {
      dispatch({
        type: "CLEAR_RESULTS",
        payload: {}
      });
    }
  }
  function handleSubmit(event, dispatch) {
    event.preventDefault();

    const url = "https://api.github.com/search/repositories?q=" + query;

    let results = [];
    axios
      .get(url)
      .then(res => {
        return res.data.items.slice(0, 10);
      })
      .then(items => {
        let language_urls = [];
        items.map(item => {
          const result = {};

          result.id = item.id;
          result.full_name = item.full_name;
          result.html_url = item.html_url;
          language_urls.push(item.languages_url);

          results.push(result);

          return null;
        });
        return language_urls;
      })
      .then(language_urls => {
        let promises = [];

        language_urls.forEach(language_url =>
          promises.push(getLanguage(language_url))
        );

        axios
          .all(promises)
          .then(items => {
            items.forEach((item, index) => {
              results[index].language = item;
            });
          })
          .then(() =>
            dispatch({
              type: "SEARCH",
              payload: results
            })
          );
      });
  }

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <Form onSubmit={e => handleSubmit(e, dispatch)}>
            <Form.Group>
              <Row>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="query"
                    onChange={e => handleChange(e, dispatch)}
                    className="wrap-text"
                  />
                </Col>
                <Col sm={3}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-block wrap-text"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        );
      }}
    </Consumer>
  );
}
