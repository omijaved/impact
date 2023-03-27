import React from "react"
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

const CheckBox = (props) => {
  const { checked, setChecked, label } = props
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label={label} />
    </FormGroup>
  )
}

export default CheckBox
