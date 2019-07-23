import React from "react";
import Button from "react-bootstrap/Button";
import { Consumer } from "../../context";

export default function Favourite(props) {
  const { id } = props;
  function handleClick(favourite, value) {
    const { dispatch } = value;
    dispatch({
      type: "REMOVE_FAVOURITE",
      payload: {
        key: favourite,
        oldValue: value
      }
    });
  }

  return (
    <Consumer>
      {value => {
        const { favourites } = value;

        return (
          <tr>
            <td>
              <a href={favourites[id].html_url}>{favourites[id].full_name}</a>
            </td>
            <td>{favourites[id].language}</td>
            <td>
              <Button
                onClick={handleClick.bind(this, id, value)}
                size="sm"
                variant="link"
                className="float-right"
                style={{
                  border: "0px",
                  padding: "0px",
                  display: "inline-block"
                }}
              >
                Remove
              </Button>
            </td>
          </tr>
        );
      }}
    </Consumer>
  );
}
