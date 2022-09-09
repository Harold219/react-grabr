import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Order } from './pages/order/Order'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes> 
    </>
  )
}

export default App
