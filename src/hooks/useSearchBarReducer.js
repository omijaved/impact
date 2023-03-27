import { useReducer } from "react";
import SEARCH_ACTIONS from "../actions/searchBar";

const INITIAL_SEARCHBAR_STATE = {
  searchValue: "",
  hasChanged: true
}

const searchBarReducer = (state = INITIAL_SEARCHBAR_STATE, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case SEARCH_ACTIONS.FETCH_SEARCH_DATA:
      return {
        ...state,
        hasChanged: action.payload
      }
  }
}


const useSearchBarReducer = () => {
  const [searchState, searchDispatch] = useReducer(searchBarReducer, INITIAL_SEARCHBAR_STATE)
  return { searchState, searchDispatch }
}

export default useSearchBarReducer
