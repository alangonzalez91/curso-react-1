import React, { useState } from 'react';
import { useObtenerRegistro } from "../custom_hooks/useObtenerRegistro";
import { APIS_BASE_URL } from "../constantes/base_api_url.js";


function Registro (){

    const [desc_registro, setDesc_registro] = useState("");

    const {
        data: datos_registros = [],
        error,
        isLoading
      } = useObtenerRegistro("api_curso_obtener_regitro.php")
    

    const enviar_registro = async () => {
        if (!desc_registro.trim()) return;
    
        try {
          const res = await fetch(APIS_BASE_URL + 'api_curso_obtener_registro.php', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              descipcion: desc_registro,
            }),
          });
    
          const data = await res.json();
          console.log(data);
    
          setDesc_registro(""); // limpiar input
        } catch (error) {
          console.error("Error:", error);
        }
      };


/*    
    const datos_registros = [
        {
            fecha: '2025-11-04',
            descripcion: 'Se creop una nmueva actividad'
        },
        {
            fecha: '2025-11-04',
            descripcion: 'Se creop una nmueva actividad'
        },
        {
            fecha: '2025-11-04',
            descripcion: 'Se creop una nmueva actividad'
        },
        {
            fecha: '2025-11-04',
            descripcion: 'Se creop una nmueva actividad'
        }                        
    ]
*/    

    return (
        <div>
            {datos_registros.map ((elemento, index) => (
                <li key={index} className="mt-5 p-2 bg-gray-200 max-w-sm rounded overflow-hidden shadow-sm text-black">
                    <p>{elemento.descripcion}</p>
                    <p>{elemento.fecha}</p>
                </li>
            ))}
            <div className='mt-10 fixed bottom-4'>
                <input type='text'
                    value={desc_registro}
                    onChange={(e) => setDesc_registro(e.target.value)}
                    className='h-10 pr-5 py-2 px-4 rounded-lg border border-solid border-black'>
                
                </input>
                <button 
                onClick={enviar_registro}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    Agregar
                </button>
            </div>            
        </div>        
    )
}

export default Registro;