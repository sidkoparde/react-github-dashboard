import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH": {
      const newList = {};
      const tempList = action.payload;
      tempList.forEach(item => {
        newList[item.id] = {
          full_name: item.full_name,
          language: item.language,
          html_url: item.html_url
        };
      });
      return {
        ...state,
        list: newList
      };
    }

    case "CLEAR_RESULTS": {
      return {
        ...state,
        list: {}
      };
    }

    case "ADD_FAVOURITE": {
      const key = action.payload.key;

      let newFavourites = action.payload.oldValue.favourites;
      newFavourites[key] = state.list[key];

      return {
        ...state,
        favourites: newFavourites
      };
    }

    case "REMOVE_FAVOURITE": {
      const key = action.payload.key;
      const newFavourites = action.payload.oldValue.favourites;
      delete newFavourites[key];

      return {
        ...state,
        favourites: newFavourites
      };
    }
    default:
      return state;
  }
};

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      favourites: {},
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
