// Saludo.jsx
import React from 'react';

function actividadCard({ tipo, actividad, fecha, completado, }) {
  return (
    <div className="mt-5 p-2 bg-gray-600 max-w-sm rounded overflow-hidden shadow-sm text-white">
        <h2>{actividad}</h2>
        <p>Fecha: {fecha}</p>
        {completado && "✅"}
    </div>
  );
}

export default actividadCard;