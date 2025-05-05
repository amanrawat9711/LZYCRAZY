import { Route, Routes } from "react-router-dom";
import Olx from "./pages/Olx";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={< Olx/>}/>
    </Routes>
    </>
  )
}

export default App
