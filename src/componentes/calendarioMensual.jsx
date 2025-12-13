import React, { useState } from "react";

function CalendarioMensual() {
  const [fechaActual, setFechaActual] = useState(new Date());

  // Eventos en dias del calendarios
  const actividades = ['30', '30', '31'];

  // Obtener año y mes actuales
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth();

  // Nombre del mes
  const nombreMes = fechaActual.toLocaleString("es-ES", { month: "long" });

  // Calcular los días del mes
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);
  const diasEnMes = ultimoDia.getDate();

  // Calcular en qué día empieza (0=Domingo, 1=Lunes, etc.)
  const diaInicio = primerDia.getDay();

  // Crear array con los días (incluyendo espacios vacíos del inicio)
  const dias = [];
  for (let i = 0; i < diaInicio; i++) {
    dias.push(null);
  }
  for (let i = 1; i <= diasEnMes; i++) {
    dias.push(i);
  }

  // Funciones para navegar entre meses
  const mesAnterior = () => {
    setFechaActual(new Date(año, mes - 1, 1));
  };

  const mesSiguiente = () => {
    setFechaActual(new Date(año, mes + 1, 1));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", width: "560px" }}>
      <h2 className="flex align-center">
        <button className="pr-3 text-2xl" onClick={mesAnterior}>◀</button>
        <h2 className="text-2xl" style={{ width: "480px" }}>{nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)} {año}</h2>
        <button className="pl-3 text-2xl" style={{  left: "860px" }} onClick={mesSiguiente}>▶</button>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
          textAlign: "center",
        }}
      >
        {["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((d) => (
          <strong key={d}>{d}</strong>
        ))}

        {dias.map((dia, i) => (
          <div
            key={i}
            className="text-white min-w-20 shadow-md"
            style={{
              padding: "10px",
              background: dia ? "RGB(75,85,99)" : "transparent",
              borderRadius: "6px",
              minHeight: "140px"
            }}
          >
            {dia || ""}
            <br/>
            <div>
                {actividades.map((actividad, index) => (
                    dia === Number(actividad) && <p key={index}>✅</p>
                ))}                
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarioMensual;
