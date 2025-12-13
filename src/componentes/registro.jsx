import React from 'react';

function registro (){

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

    return (
        <div>
            {datos_registros.map ((elemento, index) => (
                <li key={index} className="mt-5 p-2 bg-gray-200 max-w-sm rounded overflow-hidden shadow-sm text-black">
                    <p>{elemento.descripcion}</p>
                    <p>{elemento.fecha}</p>
                </li>
            ))}
            <div className='mt-10 fixed bottom-4'>
                <input type='text' className='h-10 pr-5 py-2 px-4 rounded-lg border border-solid border-black'>
                
                </input>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    Agregar
                </button>
            </div>            
        </div>        
    )
}

export default registro