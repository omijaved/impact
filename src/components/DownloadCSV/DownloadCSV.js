import React, { useState, useRef, useEffect } from "react"
import { CSVLink } from "react-csv"
import { Box } from "@mui/system"
import BoxModel from "../../generics/BoxModel"
import CheckBox from "../../generics/ControlledCheckBox"
import { csvData } from "../../services/scanData"
import Icon from "../../CSVDownloadIcon.png"
import useStyles from "./styles"


const getHeaders = (isDepthMatrices) => {
  let headers = [
    { label: "Flow Name", key: "scanningFlow" },
    { label: "Flow Date Time", key: "date" },
    { label: "Scan Recipient", key: "recipient" },
    { label: "Muscle", key: "muscle" },
    { label: "Side", key: "side" },
    { label: "Scan Count", key: "scanCount" },
    { label: "Stiffness Slope", key: "c1" },
    { label: "Stiffness", key: "c3" },
    { label: "Damping Slope", key: "d1" },
    { label: "Damping", key: "d3" },
    { label: "Damping Ratio", key: "d4" },
    { label: "Short Description", key: "shortDescription" },
    { label: "Answer", key: "answer" }
  ]
  if (isDepthMatrices){
    headers = [
      ...headers,
      { label: "Depth [mm]", key: "depth" },
      { label: "Intertia m [g]", key: "mass" },
      { label: "B [Ns/m]", key: "damping" },
      { label: "K [N/m]", key: "stiffness" }
    ]
  }
  return headers
}

const dataObject = (depth, mass, damping, stiffness) => {
  return ({
    recipient: "",
    scanningFlow: "",
    muscle: "",
    side: "",
    c1: "",
    c2: "",
    c3: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    name: "",
    scanCount: "",
    depth,
    mass,
    damping,
    stiffness
  })
}

const formatResponse = (response) => {
  let data = []
  response.data.forEach((scanData) => {
    if (scanData.depth) {
      data.push({
        ...scanData,
        depth: scanData?.depth[0],
        mass: scanData?.mass[0],
        damping: scanData?.damping[0],
        stiffness: scanData?.stiffness[0]
      })
      for (let i = 1; i < scanData.depth.length; i++) {
        data.push(dataObject(scanData?.depth[i], scanData?.mass[i], scanData?.damping[i], scanData?.stiffness[i]))
      }
    } else {
      data.push({
        ...scanData
      })
    }
  })
  return data
}

const DownloadCSV = ({ tableState }) => {
  const [scanData, setScanData] = useState([])
  const [isDepthMatrices, setIsDepthMatrices] = useState(true)
  const csvLink = useRef()

  useEffect(() => {
    if (scanData.length > 0) {
      csvLink.current.link.click()
    }
  }, [scanData])

  const getScanData = async (tableState) => {
    await csvData(tableState.selectedRows, isDepthMatrices)
      .then((res) => {
        setScanData(formatResponse(res))
      })
      .catch((error) => new Error(error))
  }

  const classes = useStyles()

  return (
    <Box className={classes.csvDownloadWrapper}>
      <BoxModel
        className={classes.icon}
        component="img"
        alt="CSV Download"
        src={Icon}
        type="button"
        onClick={() => getScanData(tableState)}
      />
      <CSVLink
        data={scanData}
        filename="ScanData.csv"
        headers={getHeaders(isDepthMatrices)}
        ref={csvLink}
      />
      <CheckBox
        checked = {isDepthMatrices}
        setChecked = {setIsDepthMatrices}
        label = "Include Depth Matrices"
      />
    </Box>
  )
}

export default DownloadCSV
