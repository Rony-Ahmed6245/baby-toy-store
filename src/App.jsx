import {  Outlet } from "react-router-dom"
import Nav from "./Components/Nav"

function App() {


  return (
    <>
      {/* Navbar  */}
      <Nav></Nav>
      {/* children render components  */}
      <Outlet></Outlet>
    </>
  )
}

export default App
