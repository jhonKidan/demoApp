import { useState } from 'react'
// import the router from react router
import {Routes, Route} from "react-router";

// import the page components
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import Login from './pages/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/login" element={<Login />} />
       
    </Routes>
    </>
  )
}

export default App
