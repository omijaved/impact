import GridStructure from "../generics/GridStructure"
import Header from "../components/Header"

const Layout = ({ children, sessionState, setSessionState }) => {
  return (
    <>
      <Header sessionState={sessionState} setSessionState={setSessionState} />
      <GridStructure>{children}</GridStructure>
    </>
  )
}

export default Layout
