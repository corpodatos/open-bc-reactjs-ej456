import React, { useState, useEffect } from "react";

const ClockF = () => {
  const valorInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [reloj, setReloj] = useState(valorInicial);

  useEffect(() => {
    const actualizaReloj = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(actualizaReloj);
    };
  });

  const tick = () => {
    return setReloj({ fecha: new Date(), edad: reloj.edad + 1 });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {reloj.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {reloj.nombre} {reloj.apellidos}
      </h3>
      <h1>Edad: {reloj.edad}</h1>
    </div>
  );
};

export default ClockF;
