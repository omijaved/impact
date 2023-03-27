import React from "react";
import GridStructure from "../../generics/GridStructure"
import { SearchBar } from "../SearchBar"
import { DownloadCSV } from "../DownloadCSV"
import useStyles from "./styles"

const  TableHeader = ({ searchState, searchDispatch, tableState }) => {
  const classes = useStyles()

  return (
    <GridStructure container className={classes.root}>
      <GridStructure xs={6} sm={8} md={4.8} lg={3} xl={2.2}>
        <SearchBar
          classes={classes.searchBar}
          state={searchState}
          dispatch={searchDispatch}
        />
      </GridStructure>
      <GridStructure xs={6} sm={4} md={7.2} lg={9} xl={9.8}>
        <DownloadCSV tableState={tableState} />
      </GridStructure>
    </GridStructure>
  )
}

export default TableHeader
