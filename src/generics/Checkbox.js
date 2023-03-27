import React from "react"
import Checkbox from "@mui/material/Checkbox"

function CheckboxWrapper(props) {
  return (
    <>
      <Checkbox {...props} />
      <span className="textField">Select All</span>
    </>
  )
}

export default CheckboxWrapper
