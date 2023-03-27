import React from "react";
import { IconButton } from "@mui/material"
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

const SearchBarIcon = ({ type, dispatch }) => {
  return (
    <InputAdornment>
      <IconButton>
        <SearchIcon
          onClick={() => dispatch({ type: type, payload: true })}
        />
      </IconButton>
    </InputAdornment>
  )
}

export default SearchBarIcon
