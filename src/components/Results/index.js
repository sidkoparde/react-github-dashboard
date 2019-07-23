import React from "react";
import Table from "react-bootstrap/Table";
import Result from "../Result";
import { Consumer } from "../../context";

export default function Results() {
  return (
    <Consumer>
      {value => {
        const { list } = value;
        const keys = Object.keys(list);

        if (keys.length !== 0) {
          return (
            <React.Fragment>
              <h5>Repos</h5>
              <Table borderless responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Language</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.map(id => {
                    return <Result key={id} id={id} />;
                  })}
                </tbody>
              </Table>
            </React.Fragment>
          );
        } else {
          return <p>Search GitHub to find repos</p>;
        }
      }}
    </Consumer>
  );
}
