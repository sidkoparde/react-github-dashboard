import React from "react";
import Button from "react-bootstrap/Button";
import { Consumer } from "../../context";

export default function Result(props) {
  const { id } = props;
  function handleClick(favourite, value) {
    const { dispatch } = value;
    dispatch({
      type: "ADD_FAVOURITE",
      payload: {
        key: favourite,
        oldValue: value
      }
    });
  }

  return (
    <Consumer>
      {value => {
        const { list, favourites } = value;
        return (
          <tr>
            <td>
              <a href={list[id].html_url}>{list[id].full_name}</a>
            </td>
            <td>{list[id].language}</td>

            {!favourites.hasOwnProperty(id) && (
              <td>
                <Button
                  onClick={handleClick.bind(this, id, value)}
                  size="sm"
                  className="float-right"
                  variant="link"
                  style={{
                    border: "0px",
                    padding: "0px",
                    display: "inline-block"
                  }}
                >
                  Add
                </Button>
              </td>
            )}
          </tr>
        );
      }}
    </Consumer>
  );
}
