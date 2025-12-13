import React, { useState, useEffect, useRef } from 'react';
import { useObtenerRegistro } from "../custom_hooks/useObtenerRegistro";
import { APIS_BASE_URL } from "../constantes/base_api_url.js";


function Registro (){

    const [reload, setReload] = useState(0);

    const scrollRef = useRef(null);

    const {
        data: datos_registros = [],
        error,
        isLoading
      } = useObtenerRegistro(`api_curso_obtener_registro.php?reload=${reload}`)

    const [desc_registro, setDesc_registro] = useState("");

    const enviar_registro = async () => {
        if (!desc_registro.trim()) return;
    
        try {
            const res = await fetch(
              APIS_BASE_URL + 
              `api_curso_enviar_registro.php?descripcion=${encodeURIComponent(desc_registro)}`,
              {
                method: "POST", // o GET si la API lo permite
              }
            );
        
            const data = await res;
            console.log(data);
            setDesc_registro("");
            setReload(r => r + 1); // refresca
          } catch (error) {
            console.error("Error:", error);
          }
      };

      /* Auto scroll post regitro */
      useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, [datos_registros]);


    return (
        <div className='overflow-y-scroll w-300 mr-[20px]'>
            <div ref={scrollRef} className='fixed top-24 overflow-y-scroll ' style={{ height: "75vh", width: "25%" }}>
            {datos_registros.map ((elemento, index) => (
                <li key={index} className="mt-5 p-2 bg-gray-200 max-w-sm rounded overflow-hidden shadow-sm text-black">
                    <p>{elemento.descripcion}</p>
                    <p>{elemento.fecha}</p>
                </li>
            ))}
            </div>

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