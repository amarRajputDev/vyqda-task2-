import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard />
    </div>
  )
}

export default App
