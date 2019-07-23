import React from "react";
import Table from "react-bootstrap/Table";
import { Consumer } from "../../context";
import Favourite from "../Favourite";

export default function Favourites() {
  return (
    <Consumer>
      {value => {
        const { favourites } = value;
        const keys = Object.keys(favourites);
        if (keys.length !== 0) {
          return (
            <React.Fragment>
              <h5>Favourites</h5>
              <Table borderless responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Language</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.map(id => {
                    return <Favourite key={id} id={id} />;
                  })}
                </tbody>
              </Table>
            </React.Fragment>
          );
        } else {
          return <p>Add your favourites here</p>;
        }
      }}
    </Consumer>
  );
}
