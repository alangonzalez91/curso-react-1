import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./componentes/navbar.jsx";
//import './App.css';
import "./index.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>Agenda electronica
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        Hola Tailwind desde StackBlitz 🚀
      </div>

      <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg">
      ✅ Tailwind activo en StackBlitz
    </div>

    </>
  )
}

export default App
