import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./componentes/navbar.jsx";
import ActCard from "./componentes/actividadCard.jsx";
import Agenda from "./componentes/calendarioMensual.jsx";
//import './App.css';
import "./index.css";


function App() {
  const [count, setCount] = useState(0)

  const eventos = [
    { actividad: "Montar StackBlitz", fecha: "2025/10/28", completado: "si" },
    { actividad: "Montar GitHub", fecha: "2025/10/28", completado: "si" },
    { actividad: "Montar Vercel", fecha: "2025/10/28", completado: "si" },
    { actividad: "Prueba de funcionamiento", fecha: "2025/10/28", completado: "si" },
    { actividad: "instalación de Tailwind", fecha: "2025/10/29", completado: "si" },
    { actividad: "Prueba de Tailwnd", fecha: "2025/10/29", completado: "si" },
    { actividad: "Creación de componente NavBar", fecha: "2025/10/29", completado: "si" },
    { actividad: "Estilización de NavBar", fecha: "2025/10/29", completado: "si" },
    { actividad: "Creacion de componente ActividadCard", fecha: "2025/10/29", completado: "si" },
    { actividad: "Estiliación de ActiviadCard", fecha: "2025/10/29", completado: "si" },
    { actividad: "Creación de componente Almanaque con ayud de Chat GPT", fecha: "2025/10/30", completado: "si" },
    { actividad: "Estiliación de Almanaque", fecha: "2025/10/30", completado: "si" }
  ];

  return (
    <>
      <NavBar/>
      <h1>Agenda electronica
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    
          <div className="fixed bg-blue-500 text-white p-4 rounded-0 shadow-lg w-full">
            Gestione sus actividades desde aqui
          </div>

          <div className='flex mt-20'>
              {/* LISTA DE ACTIVIDADES */}
                  <div className="p-6 bg-gray-200 text-white rounded-md shadow-md max-w-md">
                    <h2 className='text-2xl text-gray-800 font-bold'>Lista de actividades</h2>
                    {eventos.map((evento, index) => (
                      <ActCard
                        key={index}
                        actividad={evento.actividad}
                        fecha={evento.fecha}
                        completado={evento.completado}
                      />
                    ))}
                  </div>        

                {/* AGENDA */}      
                  <div className='ml-300'>
                    <Agenda/>          
                  </div>
           </div>
    </>
  )
}

export default App
