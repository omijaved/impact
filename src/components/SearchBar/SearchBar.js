import React from "react";
import { TextField } from "@mui/material"
import SEARCH_ACTIONS from "../../actions/searchBar";
import SearchBarIcon from "./SearchBarIcon";

const onSeachEventChange = (type, dispatch, event) => {
  dispatch({ type: type[0], payload: event.target.value })
  if(event.target.value == "") {
    dispatch({ type: type[1], payload: true })
  }
}

const keyPressHandler = (event, dispatch) => {
  if (event.key === 'Enter') {
    dispatch({ type: SEARCH_ACTIONS.FETCH_SEARCH_DATA, payload: true })
    event.preventDefault();
  }
}

const SearchBar = ({ dispatch }) => {
  return (
    <TextField
    onKeyPress={(event) => keyPressHandler(event, dispatch)}
      onChange={(event) => onSeachEventChange([SEARCH_ACTIONS.SET_SEARCH_VALUE, SEARCH_ACTIONS.FETCH_SEARCH_DATA], dispatch, event)}
      label="Search"
      InputProps={{
        type: "search",
        endAdornment: (
          <SearchBarIcon
            type={SEARCH_ACTIONS.FETCH_SEARCH_DATA}
            dispatch={dispatch}
          />
        ),
      }}
    />
  );
}

export default SearchBar
